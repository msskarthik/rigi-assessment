import UserIcon from "../../assets/user-icon.svg";

const HeaderComponent = () => {
    return (
        <div className="p-4 w-full bg-white z-10 fixed flex justify-between shadow-xl">
            <a className="w-max" href="https://rigi.club">
                <img src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/logo.svg" alt="rigi-logo" />
            </a>
            <img src={UserIcon} alt="user-icon" width={30} height={30} title="John Doe" className="cursor-pointer" />
        </div>
    );
};

export default HeaderComponent;