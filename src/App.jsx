import useQuery from "./components/useQuery";

import GuestList from "./components/GuestList";

import GuestInfo from "./components/GuestInfo";

export default function App() {
  const { data: guests, loading, error } = useQuery("/guests");

  if (loading) return <p>Loading...</p>;
  if (error || !guests) return <p>{error}</p>;
  return (
    <>
      <h1>Guest List</h1>
      <GuestList guests={guests} />
    </>
  );
}
