import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oopsie Daisy!</h1>
      <p>Sorry, an unexpected error has occurred. Please try again!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
