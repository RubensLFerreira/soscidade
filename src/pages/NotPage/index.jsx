import notFound from "../../../public/img/not-found.jpeg";

export default function NotPage() {
  return (
    <>
      <img
        style={{ width: "100%", height: "100vh", margin: "auto auto" }}
        src={notFound}
        alt=""
      />
    </>
  );
}
