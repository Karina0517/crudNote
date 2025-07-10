export default function register() {
    return `
        <nav class="navbar bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">CrudNote</a>
    </div>
  </nav>

  <section class="form-container">
    <div class="form-box d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
      
      <!-- Formulario -->
      <div class="col-md-6">
        <h2 class="form-title">Create your account</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your full name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Choose a username" required>
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Create a password" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Register</button>
          <div class="bottom-link">
            Already have an account? <a href="#">Sign in</a>
          </div>
        </form>
      </div>

      <!-- Imagen decorativa -->
      <div class="col-md-6 text-center">
        <img src="https://i.imgur.com/y7YcSyi.png" alt="Sticky note" class="register-img">
      </div>

    </div>
  </section>
    `
}