import Search from "./search.js";

export default function SubHeader(props) {
  const { title } = props;

  return (
    <div className="sub-header">
      <p className="title">
        <span>{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </p>

      <Search />
    </div>
  )
}