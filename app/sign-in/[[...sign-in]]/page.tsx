/* eslint-disable @next/next/no-html-link-for-pages */
import { SignIn } from "@clerk/nextjs";
// import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-base-200 relative overflow-hidden flex items-center justify-center p-4">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="card w-full max-w-md bg-base-100/95 shadow-2xl backdrop-blur-sm">
        <div className="card-body p-8">
          {/* Logo ou Image */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
          </div>

          {/* En-tête */}
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-4xl font-bold text-primary animate-fade-in">
              Bon retour! 👋
            </h1>
            <p className="text-base-content/60 animate-fade-in animation-delay-200">
              Nous sommes ravis de vous revoir
            </p>
          </div>

          {/* Composant SignIn de Clerk avec style personnalisé */}
          <div className="flex justify-center animate-fade-in animation-delay-400">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "w-full shadow-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton:
                    "btn btn-outline hover:btn-primary w-full normal-case transition-all duration-300",
                  dividerLine: "bg-base-300",
                  dividerText: "text-base-content/60 bg-base-100",
                  formButtonPrimary:
                    "btn btn-primary w-full normal-case shadow-lg hover:shadow-primary/50 transition-all duration-300",
                  formFieldInput:
                    "input input-bordered w-full focus:input-primary transition-all duration-300",
                  footerActionLink:
                    "link link-primary hover:link-hover",
                  identityPreviewEditButton:
                    "btn btn-ghost btn-sm hover:btn-primary",
                }
              }}
            />
          </div>

          {/* Section du bas */}
          <div className="mt-8 space-y-6 animate-fade-in animation-delay-600">
            <div className="divider before:bg-base-300 after:bg-base-300">
              Ou continuez avec
            </div>

            <div className="flex gap-4 justify-center">
              {/* Boutons sociaux avec hover effects */}
              <button className="btn btn-circle btn-outline hover:btn-primary hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              <button className="btn btn-circle btn-outline hover:btn-primary hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"/>
                </svg>
              </button>

              <button className="btn btn-circle btn-outline hover:btn-primary hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.623 3.872 10.328 9.092 11.63-.056-.162-.092-.35-.092-.583v-2.051c-.487 0-1.303 0-1.508 0c-.821 0-1.551-.353-1.905-1.009c-.393-.729-.461-1.844-1.435-2.526c-.289-.227-.069-.486.264-.451c.615.174 1.125.596 1.605 1.222c.478.627.703.769 1.596.769c.433 0 1.081-.025 1.691-.121c.328-.833.895-1.6 1.588-1.962c-3.996-.411-5.903-2.399-5.903-5.098c0-1.162.495-2.286 1.336-3.233C9.053 8.15 8.915 7.05 9.45 5.5C9.45 5.5 10.438 5.5 11.5 6.5c1.032-.5 2.13-.75 3.237-.75c1.108 0 2.205.25 3.237.75c1.062-1 2.05-1 2.05-1c.535 1.55.397 2.65.193 3.235c.842.947 1.337 2.071 1.337 3.233c0 2.699-1.907 4.687-5.903 5.098c1.098.573 1.899 2.183 1.899 3.396v2.734c0 .104-.023.179-.035.268C20.105 22.092 24 17.592 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
            </div>

            <p className="text-center text-base-content/60">
              Pas encore de compte ?{" "}
              <a href="/sign-up" className="link link-primary hover:link-hover">
                Créer un compte
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}