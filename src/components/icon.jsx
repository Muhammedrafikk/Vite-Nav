import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
    <h1>heading </h1>
      <button>
        <AiOutlineMenu size={24} />
      </button>

      <button>
        <AiOutlineClose size={24} />
      </button>
    </nav>
  );
};

export default Header;
