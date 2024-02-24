type Props = {
  params: { id: string };
};

export default function MovieDetail({ params: { id } }: Props) {
  return <h1>Movie {id}</h1>;
}
