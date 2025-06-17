import { validateUserInput } from "../util/investment";

export default function Errors({ errors }) {
  return (
    <>
      {Object.entries(errors).map(([key, error]) => (
        <p key={key} className="center">
          {error}
        </p>
      ))}
    </>
  );
}
