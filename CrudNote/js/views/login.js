export default function login() {
    return `
        <div class="login-wrapper">
        <div class="login-box">
            <h2>Welcome back</h2>
            <form>
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="Email or username" required>
            </div>
            <div class="mb-4">
                <input type="password" class="form-control" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Sign In</button>
            <div class="bottom-link">
                Don’t have an account? <a href="#">Register</a>
            </div>
            </form>
        </div>
    </div>`
}