const topicsSection = document.getElementById('topics-section');
const progressBar = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');
const searchInput = document.getElementById('search-input');

const STORAGE_KEY = 'chemprep_progress';

// Load saved progress from localStorage
function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : {};
}

// Save progress to localStorage
function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// Update the global progress bar
function updateProgress() {
  const progress = loadProgress();
  let total = 0;
  let done = 0;

  UNITS.forEach(unit => {
    unit.topics.forEach(topic => {
      total++;
      const key = `${unit.id}::${topic}`;
      if (progress[key]) done++;
    });
  });

  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  progressBar.style.width = pct + '%';
  progressLabel.textContent = `${done} / ${total} topics completed (${pct}%)`;
}

// Build and render all unit cards
function renderUnits(filter = '') {
  topicsSection.innerHTML = '';
  const progress = loadProgress();
  const query = filter.toLowerCase().trim();

  UNITS.forEach(unit => {
    const filteredTopics = unit.topics.filter(t =>
      t.toLowerCase().includes(query) || unit.title.toLowerCase().includes(query)
    );

    if (filteredTopics.length === 0) return;

    const doneCount = filteredTopics.filter(t => progress[`${unit.id}::${t}`]).length;

    const card = document.createElement('div');
    card.className = 'unit-card';

    const header = document.createElement('div');
    header.className = 'unit-header';
    header.innerHTML = `
      <span class="unit-title">${unit.title}</span>
      <span class="unit-meta">${doneCount}/${filteredTopics.length} done</span>
    `;

    const body = document.createElement('div');
    body.className = 'unit-body';

    // Auto-open units that match search
    if (query) body.classList.add('open');

    const list = document.createElement('ul');
    list.className = 'topic-list';

    filteredTopics.forEach(topic => {
      const key = `${unit.id}::${topic}`;
      const isDone = !!progress[key];

      const item = document.createElement('li');
      item.className = 'topic-item' + (isDone ? ' done' : '');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = isDone;
      checkbox.setAttribute('aria-label', topic);

      const label = document.createElement('span');
      label.className = 'topic-label';
      label.textContent = topic;

      item.appendChild(checkbox);
      item.appendChild(label);

      // Toggle on checkbox or row click
      const toggle = () => {
        const p = loadProgress();
        p[key] = !p[key];
        saveProgress(p);
        renderUnits(searchInput.value);
        updateProgress();
      };

      checkbox.addEventListener('change', toggle);
      label.addEventListener('click', toggle);

      list.appendChild(item);
    });

    body.appendChild(list);

    // Accordion toggle
    header.addEventListener('click', () => {
      body.classList.toggle('open');
    });

    card.appendChild(header);
    card.appendChild(body);
    topicsSection.appendChild(card);
  });
}

// Search handler
searchInput.addEventListener('input', () => {
  renderUnits(searchInput.value);
});

// Init
renderUnits();
updateProgress();
