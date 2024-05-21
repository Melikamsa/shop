import React from "react";
import {
  IoPersonOutline,
  IoSettingsOutline,
  IoNotificationsOutline,
  IoHeartOutline,
  IoCardOutline,
  IoLocationOutline,
  IoBagHandleOutline,
} from "react-icons/io5";

const MyProfile = () => {
  return (
    <div>
      <h2>my profile</h2>

      <section className=" border-2 border-slate-400 w-[300px] p-4">
        <div>robert</div>
        <section>
          <section>
            <div className="flex items-center gap-4 py-4 bg-zinc-500">
              <span className="bold text-2xl">
                <IoPersonOutline />
              </span>
              <p>personal information</p>
            </div>
            <div className="flex items-center gap-4 py-4 bg-zinc-500">
              <span className="bold text-2xl">
                <IoBagHandleOutline />
              </span>
              <p>my orders</p>
            </div>
            <div className="flex items-center gap-4 py-4 bg-zinc-500">
              <span className="bold text-2xl">
                <IoHeartOutline />
              </span>
              <p>my wishlists</p>
            </div>
            <div className="flex items-center gap-4 py-4 bg-zinc-500">
              <span className="bold text-2xl">
                <IoLocationOutline />
              </span>
              <p>manage addressess</p>
            </div>
            <div className="flex items-center gap-4 py-4 bg-zinc-500">
              <span className="bold text-2xl">
                <IoCardOutline />
              </span>
              <p>aved cards</p>
            </div>
            <div className="flex items-center gap-4 py-4 bg-zinc-500">
              <span className="bold text-2xl">
                <IoNotificationsOutline />
              </span>
              <p>notifications</p>
            </div>
            <div className="flex items-center gap-4 py-4 bg-zinc-500">
              <span className="bold text-2xl">
                <IoSettingsOutline />
              </span>
              <p>settings</p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default MyProfile;
