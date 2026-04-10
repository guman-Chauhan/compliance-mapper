const data = window.NIST53_DATA;

const metaEl = document.getElementById("meta");
const statFamilies = document.getElementById("stat-families");
const statControls = document.getElementById("stat-controls");
const statEnhancements = document.getElementById("stat-enhancements");
const familiesEl = document.getElementById("families");
const navEl = document.getElementById("family-nav");
const searchInput = document.getElementById("search-input");
const toggleEnhancements = document.getElementById("toggle-enhancements");
const toggleExpand = document.getElementById("toggle-expand");
const backToTop = document.getElementById("back-to-top");
const statusFilter = document.getElementById("status-filter");
const exportAudit = document.getElementById("export-audit");
const importAudit = document.getElementById("import-audit");
const clearAudit = document.getElementById("clear-audit");

const AUDIT_STORAGE_KEY = "nist53_audit_v1";
const auditState = {
  controls: {},
  enhancements: {},
};

const formatDate = (iso) => {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
};

const updateAudit = (controlId, payload) => {
  auditState.controls[controlId] = {
    ...auditState.controls[controlId],
    ...payload,
  };
  localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(auditState));
};

const updateEnhancementAudit = (enhancementId, payload) => {
  auditState.enhancements[enhancementId] = {
    ...auditState.enhancements[enhancementId],
    ...payload,
  };
  localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(auditState));
};

const loadAudit = () => {
  const raw = localStorage.getItem(AUDIT_STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && parsed.controls) {
      auditState.controls = parsed.controls;
    }
    if (parsed && parsed.enhancements) {
      auditState.enhancements = parsed.enhancements;
    }
  } catch (err) {
    console.error("Failed to load audit data", err);
  }
};

const applyStatusBadge = (badge, status) => {
  badge.classList.remove("implemented", "in-progress", "not-implemented");
  if (!status) {
    badge.textContent = "Not set";
    return;
  }
  badge.textContent = status.replace("-", " ");
  badge.classList.add(status);
};

const build = () => {
  const families = data.families || [];
  let controlCount = 0;
  let enhancementCount = 0;

  const navFragments = document.createDocumentFragment();
  const familyFragments = document.createDocumentFragment();

  families.forEach((family, index) => {
    const familyId = `family-${family.id}`;
    const controls = family.controls || [];
    controlCount += controls.length;

    const navLink = document.createElement("a");
    navLink.href = `#${familyId}`;
    navLink.textContent = `${family.label} ${family.title}`;
    navFragments.appendChild(navLink);

    const section = document.createElement("section");
    section.className = "family";
    section.id = familyId;
    section.style.animationDelay = `${index * 0.03}s`;

    const head = document.createElement("div");
    head.className = "family-head";

    const h2 = document.createElement("h2");
    h2.textContent = `${family.label} - ${family.title}`;

    const meta = document.createElement("div");
    meta.className = "family-meta";
    meta.textContent = `${controls.length} controls`;

    head.appendChild(h2);
    head.appendChild(meta);

    const controlsWrap = document.createElement("div");
    controlsWrap.className = "controls";

    controls.forEach((control) => {
      const detail = document.createElement("details");
      detail.className = "control";

      const summary = document.createElement("summary");

      const code = document.createElement("span");
      code.className = "code";
      code.textContent = control.label || control.id;

      const title = document.createElement("span");
      title.className = "title";
      title.textContent = control.title;

      const statusBadge = document.createElement("span");
      statusBadge.className = "status-badge";
      statusBadge.textContent = "Not set";

      summary.appendChild(code);
      summary.appendChild(title);
      summary.appendChild(statusBadge);

      if (control.description) {
        const desc = document.createElement("p");
        desc.className = "desc";
        desc.textContent = control.description;
        detail.appendChild(desc);
      }

      const enhancementsWrap = document.createElement("div");
      enhancementsWrap.className = "enhancements";

      const enh = control.enhancements || [];
      enhancementCount += enh.length;

      const enhHead = document.createElement("div");
      enhHead.className = "enh-head";
      enhHead.textContent = `Enhancements (${enh.length})`;
      enhancementsWrap.appendChild(enhHead);

      if (enh.length) {
        const list = document.createElement("ul");
        enh.forEach((item) => {
          const li = document.createElement("li");
          li.className = "enh-item";

          const header = document.createElement("div");
          header.className = "enh-head-row";

          const titleWrap = document.createElement("div");
          titleWrap.className = "enh-title";

          const label = document.createElement("span");
          label.className = "code";
          label.textContent = item.label || item.id;

          const text = document.createElement("span");
          text.textContent = item.title;

          titleWrap.appendChild(label);
          titleWrap.appendChild(text);

          const enhBadge = document.createElement("span");
          enhBadge.className = "status-badge";
          enhBadge.textContent = "Not set";

          header.appendChild(titleWrap);
          header.appendChild(enhBadge);

          if (item.description) {
            const enhDesc = document.createElement("p");
            enhDesc.className = "enh-desc";
            enhDesc.textContent = item.description;
            li.appendChild(enhDesc);
          }

          const fields = document.createElement("div");
          fields.className = "enh-fields";

          const statusLabel = document.createElement("label");
          statusLabel.textContent = "Enhancement status";
          const statusSelect = document.createElement("select");
          statusSelect.innerHTML = `
            <option value="">Select status</option>
            <option value="implemented">Implemented</option>
            <option value="in-progress">In progress</option>
            <option value="not-implemented">Not implemented</option>
          `;

          const evidenceLabel = document.createElement("label");
          evidenceLabel.textContent = "Evidence notes";
          const evidenceArea = document.createElement("textarea");
          evidenceArea.placeholder = "Describe evidence for this enhancement.";

          const linkLabel = document.createElement("label");
          linkLabel.textContent = "Evidence links";
          const linkInput = document.createElement("input");
          linkInput.type = "text";
          linkInput.placeholder = "Paste URLs or file paths (comma-separated)";

          fields.appendChild(statusLabel);
          fields.appendChild(statusSelect);
          fields.appendChild(evidenceLabel);
          fields.appendChild(evidenceArea);
          fields.appendChild(linkLabel);
          fields.appendChild(linkInput);

          const enhId = item.id;
          li.dataset.enhancementId = enhId;

          const enhState = auditState.enhancements[enhId] || {};
          if (enhState.status) {
            statusSelect.value = enhState.status;
            applyStatusBadge(enhBadge, enhState.status);
          }
          if (enhState.evidence) evidenceArea.value = enhState.evidence;
          if (enhState.links) linkInput.value = enhState.links;

          statusSelect.addEventListener("change", () => {
            updateEnhancementAudit(enhId, {
              status: statusSelect.value,
              evidence: evidenceArea.value,
              links: linkInput.value,
            });
            applyStatusBadge(enhBadge, statusSelect.value);
          });

          evidenceArea.addEventListener("input", () => {
            updateEnhancementAudit(enhId, {
              status: statusSelect.value,
              evidence: evidenceArea.value,
              links: linkInput.value,
            });
          });

          linkInput.addEventListener("input", () => {
            updateEnhancementAudit(enhId, {
              status: statusSelect.value,
              evidence: evidenceArea.value,
              links: linkInput.value,
            });
          });

          li.appendChild(header);
          li.appendChild(fields);
          list.appendChild(li);
        });
        enhancementsWrap.appendChild(list);
      } else {
        const empty = document.createElement("div");
        empty.className = "empty-note";
        empty.textContent = "No enhancements for this control.";
        enhancementsWrap.appendChild(empty);
      }

      detail.appendChild(summary);
      detail.appendChild(enhancementsWrap);

      const auditFields = document.createElement("div");
      auditFields.className = "audit-fields";

      const statusLabel = document.createElement("label");
      statusLabel.textContent = "Control status";
      const statusSelect = document.createElement("select");
      statusSelect.innerHTML = `
        <option value="">Select status</option>
        <option value="implemented">Implemented</option>
        <option value="in-progress">In progress</option>
        <option value="not-implemented">Not implemented</option>
      `;

      const evidenceLabel = document.createElement("label");
      evidenceLabel.textContent = "Evidence notes";
      const evidenceArea = document.createElement("textarea");
      evidenceArea.placeholder = "Describe the evidence, reference tickets, or procedures.";

      const linkLabel = document.createElement("label");
      linkLabel.textContent = "Evidence links";
      const linkInput = document.createElement("input");
      linkInput.type = "text";
      linkInput.placeholder = "Paste URLs or file paths (comma-separated)";

      auditFields.appendChild(statusLabel);
      auditFields.appendChild(statusSelect);
      auditFields.appendChild(evidenceLabel);
      auditFields.appendChild(evidenceArea);
      auditFields.appendChild(linkLabel);
      auditFields.appendChild(linkInput);

      detail.appendChild(auditFields);

      const enhText = enh.map((item) => `${item.label || item.id} ${item.title}`).join(" ");
      detail.dataset.searchText = `${family.label} ${family.title} ${control.label || control.id} ${control.title} ${enhText}`.toLowerCase();
      detail.dataset.controlId = control.id;

      const controlState = auditState.controls[control.id] || {};
      if (controlState.status) {
        statusSelect.value = controlState.status;
        applyStatusBadge(statusBadge, controlState.status);
      }
      if (controlState.evidence) evidenceArea.value = controlState.evidence;
      if (controlState.links) linkInput.value = controlState.links;

      statusSelect.addEventListener("change", () => {
        updateAudit(control.id, {
          status: statusSelect.value,
          evidence: evidenceArea.value,
          links: linkInput.value,
        });
        applyStatusBadge(statusBadge, statusSelect.value);
        applyFilters();
      });

      evidenceArea.addEventListener("input", () => {
        updateAudit(control.id, {
          status: statusSelect.value,
          evidence: evidenceArea.value,
          links: linkInput.value,
        });
      });

      linkInput.addEventListener("input", () => {
        updateAudit(control.id, {
          status: statusSelect.value,
          evidence: evidenceArea.value,
          links: linkInput.value,
        });
      });

      controlsWrap.appendChild(detail);
    });

    section.appendChild(head);
    section.appendChild(controlsWrap);
    familyFragments.appendChild(section);
  });

  navEl.appendChild(navFragments);
  familiesEl.appendChild(familyFragments);

  statFamilies.textContent = families.length;
  statControls.textContent = controlCount;
  statEnhancements.textContent = enhancementCount;

  const metaPieces = [];
  if (data.metadata?.version) metaPieces.push(`Catalog v${data.metadata.version}`);
  if (data.metadata?.lastModified) metaPieces.push(`Updated ${formatDate(data.metadata.lastModified)}`);
  metaEl.textContent = metaPieces.join("  •  ");
};

const applyFilters = () => {
  const term = searchInput.value.trim().toLowerCase();
  const statusValue = statusFilter.value;
  const controls = Array.from(document.querySelectorAll("details.control"));
  const families = Array.from(document.querySelectorAll("section.family"));

  controls.forEach((control) => {
    const match = !term || control.dataset.searchText.includes(term);
    const controlId = control.dataset.controlId;
    const controlStatus = auditState.controls[controlId]?.status || "";
    const statusMatch = statusValue === "all" || (statusValue && controlStatus === statusValue);
    control.style.display = match && statusMatch ? "block" : "none";
  });

  families.forEach((family) => {
    const visibleControls = family.querySelectorAll("details.control:not([style*='display: none'])");
    family.style.display = visibleControls.length ? "block" : "none";
  });
};

const applyEnhancementsToggle = () => {
  const show = toggleEnhancements.checked;
  document.querySelectorAll(".enhancements").forEach((el) => {
    el.classList.toggle("hidden", !show);
  });
};

const applyExpandToggle = () => {
  const expanded = toggleExpand.checked;
  document.querySelectorAll("details.control").forEach((el) => {
    el.open = expanded;
  });
};

searchInput.addEventListener("input", applyFilters);
toggleEnhancements.addEventListener("change", applyEnhancementsToggle);
toggleExpand.addEventListener("change", applyExpandToggle);
statusFilter.addEventListener("change", applyFilters);

exportAudit.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(auditState, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "nist53-audit.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

importAudit.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (parsed && parsed.controls) {
        auditState.controls = parsed.controls;
        localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(auditState));
        familiesEl.innerHTML = "";
        navEl.innerHTML = "";
        build();
        applyEnhancementsToggle();
        applyFilters();
      }
    } catch (err) {
      console.error("Failed to import audit data", err);
    }
  };
  reader.readAsText(file);
  event.target.value = "";
});

clearAudit.addEventListener("click", () => {
  auditState.controls = {};
  auditState.enhancements = {};
  localStorage.removeItem(AUDIT_STORAGE_KEY);
  familiesEl.innerHTML = "";
  navEl.innerHTML = "";
  build();
  applyEnhancementsToggle();
  applyFilters();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

loadAudit();
build();
applyEnhancementsToggle();
