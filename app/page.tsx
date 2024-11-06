// // import { UserButton } from "@clerk/nextjs";
// // import Image from "next/image";
//  import Link from "next/link";
// // import Navbar from "./components/Navbar";
// // import BudgetItem from "./components/BudgetItem";
// // import budgets from "./data";

// export default function Home() {
//   return (
//     <div>
//       {/* <Navbar /> */}
//       <div className="flex items-center justify-center flex-col py-10 w-full">
//         <div>
//           <div className="flex flex-col">
//             <h1 className="text-4xl md:text-5xl font-bold text-center">
//               Prenez le contrôle <br /> de vos finances
//             </h1>
//             <p className="py-6 text-gray-800 text-center">
//               Suivez vos budgets et vos dépenses <br /> en toute simplicité avec
//               notre application intuitive !
//             </p>
//             <div className="flex justify-center items-center">
//               <Link
//                 href={"/sign-in"}
//                 className="btn btn-sm md:btn-md btn-outline btn-accent"
//               >
//                 Se connecter
//               </Link>
//               <Link
//                 href={"/sign-up"}
//                 className="btn btn-sm md:btn-md ml-2 btn-accent"
//               >
//                 S&apos;inscrire
//               </Link>
//             </div>


//             <ul className="grid md:grid-cols-3 mt-6 gap-4 md:min-w-[1200px]">
//               {/* {budgets.map((budget) => (
//                 <Link href={""} key={budget.id}>
//                   <BudgetItem budget={budget} enableHover={1}></BudgetItem>
//                 </Link>
//               ))} */}
//             </ul>



//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            {/* En-tête avec animation */}
            <h1 className="text-5xl md:text-6xl font-bold text-primary-content animate-fade-in">
              Prenez le contrôle <br />
              <span className="text-accent">de vos finances</span>
            </h1>

            {/* Description avec style */}
            <p className="py-8 text-lg md:text-xl text-base-content/80">
              Suivez vos budgets et vos dépenses <br />
              <span className="font-semibold text-accent">en toute simplicité</span> avec
              notre application intuitive !
            </p>

            {/* Boutons avec effets hover */}
            <div className="flex justify-center items-center gap-4">
              <Link
                href={"/sign-in"}
                className="btn btn-outline btn-accent btn-lg hover:scale-105 transition-transform"
              >
                <span className="hidden md:inline">👋</span> Se connecter
              </Link>
              <Link
                href={"/sign-up"}
                className="btn btn-accent btn-lg hover:scale-105 transition-transform"
              >
                <span className="hidden md:inline">✨</span> S&apos;inscrire
              </Link>
            </div>

            {/* Section des caractéristiques */}
            <div className="divider my-16">Nos fonctionnalités</div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body">
                  <h2 className="card-title">📊 Suivi en temps réel</h2>
                  <p>Visualisez vos dépenses instantanément</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body">
                  <h2 className="card-title">🎯 Objectifs personnalisés</h2>
                  <p>Définissez et atteignez vos buts financiers</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body">
                  <h2 className="card-title">📱 Application mobile</h2>
                  <p>Gérez vos finances où que vous soyez</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}