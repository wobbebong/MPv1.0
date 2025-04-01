import MainNavbar from "../components/MainNavbar"
import LoginForm from "../components/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber">
      <MainNavbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1
          className="text-3xl font-bold mb-8 text-center text-cyber-blue cyber-glitch"
          data-text="Neural Access Portal"
        >
          Neural Access Portal
        </h1>
        <p className="text-cyber-yellow mb-8 text-center">
          Enter your credentials to access the quantum neural network
        </p>
        <LoginForm />
      </main>
    </div>
  )
}

