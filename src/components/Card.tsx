export default function Card({
  title = 'Tanfolyamok',
  description = 'Card description goes here.',
  url = 'https://example.com',
}: {
  title?: string
  description?: string
  url?: string
}) {
  return (
    <div className="p-6 shadow-[0_2px_2px_rgba(0,0,0,0.2)] bg-(--card-bg)">
      <h2 className="text-(--card-title)">{title}</h2>
      <p className="text-(--card-text)">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-(--card-title) flex inline-flex items-center justify-center"
      >
        Megnezem
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </a>
    </div>
  )
}
