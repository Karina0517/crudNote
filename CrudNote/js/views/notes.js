export default function notes() {
    return `
        <nav class="navbar bg-white border-bottom">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand fw-bold" href="#">CrudNote</a>
      <div class="d-flex align-items-center gap-3">
        <a href="#" class="nav-link">My Notes</a>
        <a href="#" class="nav-link">Shared Notes</a>
        <span class="nav-icon">⚙</span>
        <img src="https://i.imgur.com/MWAcZ2K.png" alt="User avatar" class="avatar">
      </div>
    </div>
  </nav>

  <!-- Main -->
  <main class="container py-5">
    <h2 class="fw-bold mb-4">Meeting Notes</h2>
    
    <textarea class="note-area mb-4" placeholder="Write your note here..."></textarea>

    <div class="d-flex flex-wrap gap-3 align-items-center mb-5">
      <button class="btn btn-primary">Save Changes</button>
      <button class="btn btn-outline-secondary">Share Note</button>
      <a href="#" class="delete-link">Delete Note</a>
    </div>

    <div class="note-footer">
      Nota: Dejen volar la creatividad
    </div>
  </main>

    `
}