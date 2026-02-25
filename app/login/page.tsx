export default function LoginPage() {
    return (
        <main style={{padding: 20}}>
            <form>
                <input type="email" placeholder="Email"/>
                <br/>
                <input type="password" placeholder="Password"/>
                <br />
                <button type="submit">Login</button>
            </form>
        </main>
    );
}