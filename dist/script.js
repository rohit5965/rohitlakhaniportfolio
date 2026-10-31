const email = 'rohitlakhani8888@gmail.com';

// Small, progressive enhancements; the portfolio content works without JavaScript.
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
};
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
window.matchMedia('(min-width: 601px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const cards = [...document.querySelectorAll('[data-category]')];
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('#filter-status').textContent = `Showing ${count} ${filter === 'all' ? '' : filter === 'ai' ? 'AI and LLM ' : 'production app '}projects.`;
  });
});

const projects = {
  legal: {
    category: '01 / RAG & EVALUATION · OCTOBER 2026', title: 'Legal RAG',
    intro: 'A local-first legal assistant over the EU GDPR and India’s DPDP Act. Every sentence points back to an article or section, and the system abstains when the source material cannot answer the question.',
    metric: '98.6% Recall@5', metricNote: 'Reranked retrieval, evaluated on 40 labelled questions.',
    points: [
      'Benchmarked vector search, hybrid retrieval with pgvector and full-text search, and cross-encoder reranking. Reranking raised Recall@5 from 90.0% to 98.6% and citation accuracy from 80.0% to 94.3%.',
      'Compared four cross-encoders and introduced a document-frequency cutoff that lifted hybrid retrieval recall from 85.7% to 90.0%.',
      'Abstained on all five out-of-scope evaluation questions. Runs on CPU without paid APIs, with CI against a real pgvector database.'
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL + pgvector', 'Ollama', 'ONNX', 'Flutter', 'Docker', 'GitHub Actions'],
    note: 'Results are from the project’s labelled evaluation set, as reported in my résumé. The architecture sketch is illustrative; it is not a live legal advice interface.',
    links: [{ label: 'Explore on GitHub', url: 'https://github.com/rohitlakhani207/legal-rag' }]
  },
  agent: {
    category: '02 / AGENTS & GUARDRAILS · OCTOBER 2026', title: 'AgentGate',
    intro: 'A two-step gate for a LangGraph agent. Decider 2B checks every tool call, Clef-flash rechecks uncertain decisions, and unresolved calls go to a phone web app for human approval.',
    metric: '0 dangerous actions missed', metricNote: 'Across 150 labelled tool calls, including 20 hidden prompt injections.',
    points: [
      'Benchmarked six approaches: keyword rules, a trained classifier, an LLM judge, and model-based gates. The two-step gate missed zero dangerous actions in the labelled test set.',
      'Measured the tradeoffs: Decider 2B was too overconfident to act as an effective first filter, with 69% of calls still reaching a human. As a model router, it routed 93 of 100 requests correctly.',
      'Clef-flash flagged 17 of 20 prompt injections with zero false alarms in the benchmark. WebSockets connect the agent workflow to the human approval interface.'
    ],
    stack: ['Python', 'LangGraph', 'FastAPI', 'WebSockets', 'AWS Strands Decider 2B', 'Cloudflare Clef-flash', 'Groq', 'scikit-learn', 'SQLite'],
    note: 'These are benchmark results on a bounded labelled dataset, as reported in my résumé. They describe measured behaviour, not a guarantee of safety on unseen actions.',
    links: [{ label: 'Explore on GitHub', url: 'https://github.com/rohitlakhani207/agentgate' }]
  },
  pranaam: {
    category: '03 / PRODUCTION APP · VANDANA TECHNOLOGIES', title: 'Pranaam Guruji',
    intro: 'A real-time consultation platform with chat, voice, and video. I led the project from architecture through production release as Technical Solution Architect (Mobile).',
    metric: 'Architecture → production', metricNote: 'Released on Google Play and the App Store.',
    points: [
      'Designed the backend from scratch: ASP.NET Core REST APIs, SignalR hubs, authentication, custom middleware, and a 14-table PostgreSQL schema.',
      'Built offline-first sync with ObjectBox, conflict resolution, sync queues, and failover. Caching and API design reduced network dependency by approximately 30%.',
      'Engineered the WebRTC / SignalR real-time layer, including connection lifecycle, peer negotiation, and network recovery. Deployed Docker containers on AWS ECS, EC2, RDS, and S3.'
    ],
    stack: ['Flutter', 'ASP.NET Core', 'PostgreSQL', 'SignalR', 'WebRTC', 'ObjectBox', 'Docker', 'AWS'],
    note: 'Client project. My contribution covered architecture, backend systems, real-time communication, offline sync, and deployment.',
    links: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.pranaamg.mobile' }, { label: 'App Store', url: 'https://apps.apple.com/in/app/pranaam-guruji/id6740072144' }]
  },
  lexedge: {
    category: '04 / CLIENT PROJECT · AI LEGAL PRACTICE', title: 'LexEdge',
    intro: 'AI-assisted legal practice management. My work brought a chatbot into API-driven legal workflows alongside automation and scheduling.',
    metric: 'AI in everyday workflows', metricNote: 'Released on Google Play and the App Store.',
    points: [
      'Integrated an AI chatbot into legal practice workflows using existing APIs.',
      'Connected automation and scheduling features to support day-to-day legal work.',
      'Contributed to a production app available on both major mobile platforms.'
    ],
    stack: ['AI chatbot integration', 'REST APIs', 'Automation', 'Scheduling'],
    note: 'Client project. The contribution described here is AI chatbot and workflow integration, as recorded in my résumé.',
    links: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.lexedge.app' }, { label: 'App Store', url: 'https://apps.apple.com/us/app/lexedge/id6526481825' }]
  }
};

const dialog = document.querySelector('.project-dialog');
const dialogContent = document.querySelector('#dialog-content');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
let dialogTrigger;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    dialogTrigger = button;
    dialogContent.innerHTML = `<p class="eyebrow">${escapeHTML(project.category)}</p><h2 id="dialog-title">${escapeHTML(project.title)}</h2><p class="dialog-intro">${escapeHTML(project.intro)}</p><div class="dialog-metric"><strong>${escapeHTML(project.metric)}</strong><span>${escapeHTML(project.metricNote)}</span></div><h3>Behind the build</h3><ul>${project.points.map(point => `<li>${escapeHTML(point)}</li>`).join('')}</ul><h3>The stack</h3><div class="tech-tags">${project.stack.map(tech => `<span>${escapeHTML(tech)}</span>`).join('')}</div><p class="dialog-note">${escapeHTML(project.note)}</p><div class="dialog-links">${project.links.map(link => `<a class="button button-dark" href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>`;
    dialog.showModal();
    dialog.scrollTop = 0;
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => dialogTrigger?.focus({ preventScroll: true }));

let toastTimeout;
const showToast = message => {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3500);
};
document.querySelector('.copy-email').addEventListener('click', async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
    } else {
      const field = document.createElement('textarea');
      field.value = email;
      field.style.cssText = 'position:fixed;left:-9999px;top:0;';
      field.setAttribute('readonly', '');
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      if (!copied) throw new Error('Copy unavailable');
    }
    showToast('Email copied. Let’s make something good.');
  } catch {
    showToast(email);
  }
});

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = document.querySelector(`.header-inner nav a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('#work, #about, #experience, #contact').forEach(section => sectionObserver.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();
