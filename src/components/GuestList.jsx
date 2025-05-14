import { useState } from "react";
import GuestInfo from "./GuestInfo.jsx";

export default function GuestList({ guests }) {
  const [selectedGuest, setSelectedGuest] = useState(null);

  return (
    <section className="guests">
      {guests.map((guest) => (
        <div key={guest.id} onClick={() => setSelectedGuest(guest)}>
          {guest.name}
        </div>
      ))}

      {selectedGuest && (
        <div className="modal">
          <button onClick={() => setSelectedGuest(null)}>Close</button>
          <GuestInfo guest={selectedGuest} />
        </div>
      )}
    </section>
  );
}
