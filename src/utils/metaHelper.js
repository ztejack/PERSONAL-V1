// File: src/utils/MetaHelper.js
export function updateHeadMeta(to) {
  // Set document title
  if (to.meta?.title) {
    document.title = to.meta.title;
  }

  // Hapus meta tag sebelumnya
  const oldMetaTags = document.querySelectorAll("[data-vue-router-controlled]");
  oldMetaTags.forEach((el) => el.parentNode.removeChild(el));

  // Tambahkan meta tag baru
  if (to.meta?.metaTags) {
    to.meta.metaTags.forEach((tagDef) => {
      const tag = document.createElement("meta");

      Object.entries(tagDef).forEach(([key, val]) => {
        tag.setAttribute(key, val);
      });

      tag.setAttribute("data-vue-router-controlled", "");
      document.head.appendChild(tag);
    });
  }
}
