import MainNavbar from "../components/MainNavbar"
import AdminPostForm from "../components/AdminPostForm"
import { Shield } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber">
      <MainNavbar
        activeRoute="/admin"
        additionalItems={
          <div className="ml-4 flex items-center">
            <span className="bg-cyber-green/20 text-cyber-green px-3 py-1 rounded-full text-sm flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              Admin Access
            </span>
          </div>
        }
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-cyber-blue cyber-glitch" data-text="Admin Neural Interface">
          Admin Neural Interface
        </h1>
        <p className="text-cyber-yellow mb-8">Create and manage technical analysis posts for the neural network</p>
        <AdminPostForm />
      </main>
    </div>
  )
}

