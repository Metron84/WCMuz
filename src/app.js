// ── Stars background ────────────────────────────────────────────
(function createStars() {
  const container = document.querySelector('.stars');
  if (!container) return;
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('span');
    s.style.cssText = `
      position:absolute;
      width:${Math.random() * 2 + 1}px;
      height:${Math.random() * 2 + 1}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      border-radius:50%;
      background:rgba(255,255,255,${Math.random() * 0.5 + 0.1});
      animation: twinkle ${Math.random() * 3 + 2}s infinite alternate;
      animation-delay:${Math.random() * 3}s;
    `;
    container.appendChild(s);
  }
})();

// ── Render ────────────────────────────────────────────────────────
function buildCard(team) {
  const matchRows = team.matches.map(m => {
    const derbyBadge = m.derby
      ? `<span class="derby-badge">${m.derbyLabel}</span>`
      : '';
    return `
      <div class="match-row">
        <div class="match-date">${m.date}</div>
        <div class="match-time">${m.time}</div>
        <div class="match-opponent">
          <span class="opp-flag">${m.opponentFlag}</span>
          <span class="opp-name">vs ${m.opponent}</span>
          ${derbyBadge}
        </div>
        <div class="match-venue">${m.venue}</div>
      </div>`;
  }).join('');

  return `
    <article class="team-card" data-category="${team.category}" data-id="${team.id}">
      <div class="card-header" style="background:${team.color};">
        <div class="card-header-left">
          <span class="card-flag">${team.flag}</span>
          <div>
            <h2 class="card-name">${team.name}</h2>
            <span class="card-group">Group ${team.group}</span>
          </div>
        </div>
        <div class="card-crescent">☪</div>
      </div>
      <div class="card-col-head">
        <span>Date</span>
        <span>Kick-off (LBT)</span>
        <span>Opponent</span>
        <span>Venue</span>
      </div>
      <div class="card-matches">
        ${matchRows}
      </div>
    </article>`;
}

function renderTeams(filter = 'all') {
  const arabGrid   = document.getElementById('teams-grid');
  const muslimGrid = document.getElementById('teams-grid-muslim');
  const arabLabel  = document.querySelector('.section-label:not(.section-label--muslim)');
  const muslimLabel = document.querySelector('.section-label--muslim');

  const arab   = TEAMS.filter(t => t.category === 'arab');
  const muslim = TEAMS.filter(t => t.category === 'muslim');

  const showArab   = filter === 'all' || filter === 'arab';
  const showMuslim = filter === 'all' || filter === 'muslim';

  arabGrid.innerHTML   = showArab   ? arab.map(buildCard).join('')   : '';
  muslimGrid.innerHTML = showMuslim ? muslim.map(buildCard).join('') : '';

  arabLabel.style.display   = showArab   ? '' : 'none';
  muslimLabel.style.display = showMuslim ? '' : 'none';

  // Stagger animations
  document.querySelectorAll('.team-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 60}ms`;
  });
}

// ── Filter buttons ───────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTeams(btn.dataset.filter);
  });
});

// ── Init ──────────────────────────────────────────────────────────
renderTeams('all');
