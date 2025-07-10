export default function dashboard() {
    return `
        <nav class="navbar bg-white border-bottom py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand fw-bold" href="#">CrudNote</a>
      <div class="d-flex align-items-center gap-3">
        <button class="btn btn-outline-secondary btn-sm">Sign Out</button>
        <img src="https://i.imgur.com/MWAcZ2K.png" alt="User" class="avatar">
      </div>
    </div>
  </nav>

  <!-- Main -->
  <main class="container py-5">

    <!-- Header y tabs -->
    <div class="mb-4">
      <h2 class="fw-bold">Hello, Antony</h2>
      <div class="mt-3">
        <a href="#" class="tab-link active">All</a>
        <a href="#" class="tab-link">Personal</a>
        <a href="#" class="tab-link">Shared</a>
      </div>
    </div>

    <!-- My Notes -->
    <h5 class="mb-3">My Notes</h5>
    <div class="row g-3 mb-5">
      <div class="col-md-3 col-sm-6">
        <div class="note-card">
          <div class="note-title">📄 Project Brainstorm</div>
          <div class="note-desc">Brainstorming session for the new project</div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="note-card">
          <div class="note-title">📄 Meeting Notes</div>
          <div class="note-desc">Notes from the team meeting</div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="note-card">
          <div class="note-title">📄 Grocery List</div>
          <div class="note-desc">Items to buy from the grocery store</div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="note-card">
          <div class="note-title">📄 Travel Plans</div>
          <div class="note-desc">Itinerary for the upcoming trip</div>
        </div>
      </div>
    </div>

    <!-- Notes Shared With Me -->
    <h5 class="mb-3">Notes Shared With Me</h5>
    <div class="row g-3">
      <div class="col-md-3 col-sm-6">
        <div class="note-card">
          <div class="note-title">📄 Design Feedback</div>
          <div class="note-desc">Feedback on the latest design mockups</div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="note-card">
          <div class="note-title">📄 Marketing Strategy</div>
          <div class="note-desc">Marketing strategy for the new campaign</div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="note-card">
          <div class="note-title">📄 Client Requirements</div>
          <div class="note-desc">Requirements gathered from the client</div>
        </div>
      </div>
    </div>
    </main>

    <button class="btn btn-primary new-note-btn">+ New Note</button>
    `
}