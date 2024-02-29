import { inBrowser, getScrollOffset } from 'vitepress';
import { onMounted, onUnmounted, onUpdated } from 'vue';

const resolvedHeaders = [];

export function resolveTitle(theme) {
    return (
        (
            (typeof theme.outline === 'object' && !Array.isArray(theme.outline))
            && theme.outline.label
        )
        || theme.outlineTitle
        || 'On this page'
    );
}

export function getHeaders(level) {
    const headers = [...document.querySelectorAll('.vp-doc :where(h1,h2,h3,h4,h5,h6)')]
        .filter(el => el.id && el.hasChildNodes())
        .map(el => {
            return {
                element: el,
                title: serializeHeader(el),
                link: '#' + el.id,
                level: Number(el.tagName[1])
            };
        });

    return resolveHeaders(headers, level);
}

function serializeHeader(el) {
    let ret = '';
    for (const node of el.childNodes) {
        if (node.nodeType === 1) {
            if (
                node.classList.contains('VPBadge') ||
                node.classList.contains('header-anchor') ||
                node.classList.contains('ignore-header')
            ) {
                continue;
            }
            ret += node.textContent;
        } else if (node.nodeType === 3) {
            ret += node.textContent;
        }
    }
    return ret.trim();
}

export function resolveHeaders(headers, high = 3) {
    // 只会收集h3及其以上的标题
    headers = headers.filter(h => h.level <= high);
    resolvedHeaders.length = 0
    for (const { element, link } of headers) {
        resolvedHeaders.push({ element, link })
    }

    const ret = [];
    outer: for (let i = 0; i < headers.length; i++) {
        const cur = headers[i];
        if (i === 0) {
            ret.push(cur);
            continue;
        }

        // 向前回溯
        for (let j = i - 1; j >= 0; j--) {
            const prev = headers[j];
            // level越小等级越高
            if (prev.level < cur.level) {
                (prev.children || (prev.children = [])).push(cur);
                continue outer;
            }
        }
        ret.push(cur);
    }

    return ret;
}

export function isReachPageBottom() {
    if (inBrowser) {
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;
        const offsetHeight = document.body.offsetHeight;
        return Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    }
    return false;
}

export function isReachPageTop() {
    if (inBrowser) {
        const scrollY = window.scrollY;
        return scrollY < 1;
    }
    return false;
}

export function useActiveAnchor(container, marker) {
    let prevActiveLink = null;
    const onScroll = () => {
        setActiveLink()
    };

    onMounted(() => {
        requestAnimationFrame(setActiveLink);
        window.addEventListener('scroll', onScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll);
    });

    function setActiveLink() {
        const scrollY = window.scrollY;

        const headers = resolvedHeaders
            .map(({ element, link }) => ({
                link,
                top: getAbsoluteTop(element)
            }))
            .filter(({ top }) => !Number.isNaN(top))
            .sort((a, b) => a.top - b.top);

        if (!headers.length) {
            activateLink(null);
            return;
        }

        if (isReachPageTop()) {
            activateLink(headers[0].link);
            return;
        }

        if (isReachPageBottom()) {
            activateLink(headers[headers.length - 1].link);
            return;
        }

        let activeLink = null;
        for (const { link, top } of headers) {
            if (top > (scrollY + window.innerHeight)) {
                break;
            }
            activeLink = link;
        }
        activateLink(activeLink);
    }

    function activateLink(hash) {
        if (prevActiveLink) {
            prevActiveLink.classList.remove('active');
        }

        // 归一化
        if (hash == null) {
            prevActiveLink = null;
        } else {
            prevActiveLink = container.value.querySelector(
                `a[href="${decodeURIComponent(hash)}"]`
            );
        }

        const activeLink = prevActiveLink;
        if (activeLink) {
            activeLink.classList.add('active');
            marker.value.style.top = activeLink.offsetTop + 'px';
            marker.value.style.opacity = '1';
        } else {
            marker.value.style.top = '0px';
            marker.value.style.opacity = '0';
        }
    }
}

function getAbsoluteTop(element) {
    let offsetTop = 0

    // 循环迭代
    while (element !== document.body) {
      if (element === null) {
        return NaN
      }
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }

    return offsetTop
}