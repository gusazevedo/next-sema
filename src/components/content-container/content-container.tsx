import './style.css';

export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className='content-container'>
      {children}
    </section>
  );
}