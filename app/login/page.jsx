import Image from "next/image";
const Login = () => {
  return (
    <section>
      <div className="">
        {/* <Image alt="img" width={300} height={350} src="/login.png" /> */}
        <Image alt="logo" width={150} height={60} src="/LogoTextBlack.png" />
      </div>

      <div>
        <h1>welcome</h1>
        <p>please login here</p>
      </div>
    </section>
  );
};

export default Login;
