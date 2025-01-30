import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
    
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}


// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <Link href="/api/auth/login">Login</Link>
//     </div>
//   );
// }