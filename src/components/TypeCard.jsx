import { pokemonTypeColors } from "../utils";

export default function TypeCard(props) {
  const { type } = props;
  const { color, background } = pokemonTypeColors[type];

  return (
    <div
      className="type-tile"
      style={{
        color,
        background,
      }}
    >
      <p>{type}</p>
    </div>
  );
}
