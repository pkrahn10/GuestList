export default function GuestInfo({ guest }) {
  return (
    <article className="guest">
      <h2>
        {guest.name} #{guest.id}
      </h2>
      <h2>{guest.email}</h2>
      <h2>{guest.phone}</h2>
      <h2>{guest.bio}</h2>
      <h2>{guest.job}</h2>
    </article>
  );
}
