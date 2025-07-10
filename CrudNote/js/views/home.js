export default function home() {
    return `
         <nav class="navbar navbar-expand-lg bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">CrudNote</a>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav me-3">
          <li class="nav-item"><a class="nav-link" href="./index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Terms</a></li>
        </ul>
        <div class="d-flex gap-2">
          <a href="./login.html" class="btn btn-primary">Sign In</a>
          <a href="./register.html" class="btn btn-outline-secondary">Register</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="py-5 bg-white">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5 mb-4 mb-md-0">
          <img src="https://i.imgur.com/2XrvjXK.jpg" alt="Hero image" class="hero-image">
        </div>
        <div class="col-md-7">
          <h1 class="fw-bold">Collaborate on notes<br>with your team</h1>
          <p class="text-secondary mb-4">CrudNote is a collaborative note-taking application that allows you to create, edit, and share notes with your team. Sign up today to get started.</p>
          <div class="d-flex gap-3">
            <a href="./login.html" class="btn btn-primary">Sign In</a>
            <a href="./register.html" class="btn btn-outline-secondary">Register</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: What is CrudNote -->
  <section class="py-5 bg-light">
    <div class="container text-center">
      <h2 class="fw-bold mb-3">What is CrudNote?</h2>
      <p class="text-secondary mb-5 mx-auto" style="max-width: 600px;">
        CrudNote is a collaborative note-taking application that allows you to create, edit, and share notes with your team. Sign up today to get started.
      </p>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border rounded-3 shadow-sm">
            <div class="card-body text-start">
              <h5 class="fw-bold">📝 Create</h5>
              <p class="text-secondary">Create notes with rich text editing, images, and more.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border rounded-3 shadow-sm">
            <div class="card-body text-start">
              <h5 class="fw-bold">👥 Collaborate</h5>
              <p class="text-secondary">Collaborate with your team in real-time.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border rounded-3 shadow-sm">
            <div class="card-body text-start">
              <h5 class="fw-bold">🔗 Share</h5>
              <p class="text-secondary">Share your notes with your team or the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white border-top mt-5">
    <div class="container d-flex justify-content-between flex-wrap text-center text-md-start">
      <div class="mb-2 mb-md-0">
        <a href="./index.html" class="me-3 text-decoration-none text-secondary">Home</a>
        <a href="#" class="me-3 text-decoration-none text-secondary">Contact</a>
        <a href="#" class="text-decoration-none text-secondary">Terms</a>
      </div>
      <div class="text-secondary">
        © 2024 CrudNote. All rights reserved.
      </div>
    </div>
  </footer>
    `
}