// src/pages/MainScreen.js
import './MainScreen.css'; // Подключаем CSS файл
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dailyRewardIcon from './../assets/images/daillyReward.png'; // Путь исправлен
import dailyCodeIcon from './../assets/images/dailyCode.png'; // Путь исправлен
import comboIcon from './../assets/images/combo.png';
import coinIcon from './../assets/images/coin.png';
import energyIcon from './../assets/images/energy.png';
import boostIcon from './../assets/images/boost.png';
import exchangeIcon from './../assets/images/exchange.png';
import mineIcon from './../assets/images/mine.png';
import friendsIcon from './../assets/images/friends.png';
import earnIcon from './../assets/images/earn.png';
import airdropIcon from './../assets/images/airdrop.png';
import catImage from './../assets/images/cat.png';
import closeButtonIcon from './../assets/images/closeButton.png';
import settingsIcon from './../assets/images/settings.png';
import userLevelIcon from './../assets/images/userLevel.png';
import backgroundRectangle from './../assets/images/backgroundRectangle.png';
import outerCircle from './../assets/images/outerCircle.png';
import innerCircle from './../assets/images/innerCircle.png';
import threeDotsIcon from './../assets/images/threeDots.png';
import topRectangle from './../assets/images/topRectangle.png';
import bottomRectangle from './../assets/images/bottomRectangle.png';

const MainScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [showPlusTwo, setShowPlusTwo] = useState(false);
  const [plusTwoPosition, setPlusTwoPosition] = useState({ top: 0, left: 0 });

  const handleCatClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPopupPosition({ top: rect.top - 20, left: rect.left + rect.width / 2 });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000);

    setPlusTwoPosition({ top: rect.top, left: rect.left + rect.width / 2 });
    setShowPlusTwo(true);
    setTimeout(() => setShowPlusTwo(false), 1000);
  };

  return (
    <div className="flex overflow-hidden flex-col px-4 pt-12 pb-20 mx-auto w-full bg-black max-w-[480px]">
      <div className="flex flex-col items-start pt-3 rounded-xl bg-stone-800">
        <div className="flex z-10 flex-col py-0.5 mb-0 w-full rounded-xl bg-stone-950">
          <div className="flex justify-between px-4 py-1 w-full min-h-[48px]">
            <div className="flex flex-1 shrink gap-4 items-center h-full text-lg leading-none text-white whitespace-nowrap basis-0">
              <div className="gap-2.5 self-stretch my-auto min-h-[20px]">
                Cancel
              </div>
            </div>
            <div className="flex flex-col justify-center my-auto font-medium leading-none text-center">
              <div className="self-center text-lg text-white">
                Kurilian Bobtail
              </div>
              <div className="text-sm text-zinc-400">bot</div>
            </div>
            <div className="flex flex-1 shrink gap-4 items-center h-full basis-0">
              <div className="flex gap-4 items-center self-stretch my-auto w-5">
                <img
                  loading="lazy"
                  src={threeDotsIcon}
                  alt="Three DotsIcon"
                  className="object-contain self-stretch my-auto w-5 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-start mt-4 mr-4 w-full max-w-[400px]">
            <div className="flex flex-col self-start">
              <div className="flex gap-2 items-center">
                <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-8 h-8 bg-gray-800 rounded-lg">
                  <img
                    loading="lazy"
                    src={catImage}
                    alt="Cat Image"
                    className="object-contain self-stretch my-auto w-6 aspect-[1.33]"
                  />
                </div>
                <div className="self-stretch my-auto text-xs font-medium leading-none text-white">
                  Name (CEO)
                </div>
              </div>
              <div className="flex gap-5 items-start mt-4 text-xs font-medium leading-none text-white">
                <div className="flex items-start whitespace-nowrap">
                  <div>Platimum</div>
                  <img
                    loading="lazy"
                    src={userLevelIcon}
                    alt="User Level Icon"
                    className="object-contain shrink-0 w-3 aspect-square"
                  />
                </div>
                <div>
                  4 <span className="text-white">/ 10</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start p-px mt-1.5 border border-solid bg-white bg-opacity-10 border-white border-opacity-30 rounded-[30px]">
                <div className="flex shrink-0 h-2 rounded-[30px]" />
              </div>
            </div>
            <div className="flex overflow-hidden flex-auto gap-5 justify-between items-center self-end px-3 py-1.5 mt-10 border border-solid bg-white bg-opacity-10 border-white border-opacity-30 rounded-[30px]">
              <div className="flex gap-2.5 self-stretch my-auto">
                <img
                  loading="lazy"
                  src={coinIcon}
                  alt=""
                  className="object-contain shrink-0 my-auto w-6 aspect-square"
                />
                <div className="flex shrink-0 w-px h-7 bg-white" />
              </div>
              <div className="flex flex-col self-stretch leading-none">
                <div className="text-xs font-medium text-center text-white text-opacity-50">
                  Прибыль в час
                </div>
                <div className="flex gap-1.5 items-center w-full text-xs font-semibold text-white whitespace-nowrap">
                  <img
                    loading="lazy"
                    src={coinIcon}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  />
                  <div className="self-stretch my-auto">+37,71K</div>
                  <img
                    loading="lazy"
                    src={settingsIcon}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-2.5 self-stretch my-auto">
                <div className="flex shrink-0 w-px h-7 bg-white" />
                <img
                  loading="lazy"
                  src={settingsIcon}
                  alt=""
                  className="object-contain shrink-0 my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center py-px mt-3.5 w-full bg-teal-400 rounded-[40px_40px_0px_0px]">
            <div className="flex overflow-hidden flex-col px-4 py-5 w-full bg-gray-800 rounded-[40px_40px_0px_0px]">
              <div className="flex gap-2 items-center leading-none">
                <div className="flex flex-col items-center self-stretch px-3.5 py-3.5 my-auto rounded-xl bg-white bg-opacity-10 w-[127px]">
                  <Link to="/daily-reward">
                    <img
                      loading="lazy"
                      src={dailyRewardIcon}
                      alt="Daily Reward"
                      className="object-contain aspect-[0.97] w-[35px]"
                    />
                  </Link>
                  <div className="self-stretch mt-2.5 text-xs font-bold text-white">
                    Ежедневная награда
                  </div>
                  <div className="mt-2.5 text-xs font-medium text-center text-white text-opacity-40">
                    14:13
                  </div>
                </div>
                <div className="flex flex-col flex-1 shrink items-center self-stretch px-5 py-3.5 my-auto text-center rounded-xl basis-[54px] bg-white bg-opacity-10">
                  <Link to="/daily-code">
                    <img
                      loading="lazy"
                      src={dailyCodeIcon}
                      alt='Daily Code'
                      className="object-contain w-[41px] h-[41px]"
                    />
                  </Link>
                  <div className="self-stretch mt-2 text-xs font-bold text-white">
                    Ежедневный шифр
                  </div>
                  <div className="mt-2 text-xs font-medium text-white text-opacity-40">
                    09:13
                  </div>
                </div>
                <div className="flex flex-col flex-1 shrink items-start self-stretch px-11 py-3.5 my-auto text-center whitespace-nowrap rounded-xl border border-red-500 border-solid basis-0 w-[127px]">
                  <Link to="/combo">
                    <img
                      loading="lazy"
                      src={comboIcon}
                      alt='Combo'
                      className="object-contain self-stretch w-full aspect-square"
                    />
                  </Link>
                  <div className="mt-1.5 text-xs font-bold text-white">
                    Комбо
                  </div>
                  <div className="mt-2 text-xs font-medium text-white text-opacity-40">
                    00:46
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center self-center mt-6 text-3xl font-bold tracking-tight text-white">
                <img
                  loading="lazy"
                  src={coinIcon}
                  alt=''
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[38px]"
                />
                <div className="self-stretch my-auto">507, 981</div>
              </div>
              <button
                onClick={handleCatClick}
                className="flex justify-center mt-5 w-full"
              >
                <img
                  loading="lazy"
                  src={catImage}
                  alt=""
                  className="object-contain w-full aspect-square max-w-[304px]"
                />
              </button>
              {showPlusTwo && (
                <div
                  className="plus-two"
                  style={{
                    position: 'absolute',
                    top: plusTwoPosition.top,
                    left: plusTwoPosition.left,
                    animation: 'flyUp 1s forwards'
                  }}
                >
                  +2
                </div>
              )}
              <div className="flex gap-5 justify-between items-center mt-6 w-full text-base font-bold tracking-tight text-white">
                <div className="flex gap-2 justify-between items-center self-stretch my-auto w-[115px]">
                  <Link to="/energy">
                    <img
                      loading="lazy"
                      src={energyIcon}
                      alt='Energy'
                      className="object-contain shrink-0 self-stretch my-auto aspect-[0.79] w-[22px]"
                    />
                  </Link>
                  <div className="self-stretch my-auto">4471 / 5000</div>
                </div>
                <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
                  <Link to="/boost">
                    <img
                      loading="lazy"
                      src={boostIcon}
                      alt='Boost'
                      className="object-contain shrink-0 self-stretch my-auto aspect-[0.94] w-[30px]"
                    />
                  </Link>
                  <div className="self-stretch my-auto">Boost</div>
                </div>
              </div>
              <div className="flex p-1.5 mt-16 text-xs font-medium leading-none text-white whitespace-nowrap rounded-xl bg-teal-950 bg-opacity-80">
                <div className="flex flex-col flex-1 justify-center items-center px-2.5 py-2 rounded-lg bg-neutral-900 bg-opacity-60 min-h-[54px]">
                  <Link to="/exchange">
                    <img
                      loading="lazy"
                      src={exchangeIcon}
                      alt='Exchange'
                      className="object-contain w-6 aspect-[1.09]"
                    />
                  </Link>
                  <div className="mt-1.5">Exchange</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center px-2.5 py-2 rounded-lg min-h-[54px]">
                  <Link to="/mine">
                    <img
                      loading="lazy"
                      src={mineIcon}
                      alt='Mine'
                      className="object-contain aspect-square w-[22px]"
                    />
                  </Link>
                  <div className="mt-1.5">Mine</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center px-2.5 py-2 rounded-lg min-h-[54px]">
                  <Link to="/friends">
                    <img
                      loading="lazy"
                      src={friendsIcon}
                      alt='Friends'
                      className="object-contain aspect-[1.36] w-[30px]"
                    />
                  </Link>
                  <div className="mt-1.5">Friends</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center px-2.5 py-2 rounded-lg min-h-[54px]">
                  <Link to="/earn">
                    <img
                      loading="lazy"
                      src={earnIcon}
                      alt='Earn'
                      className="object-contain aspect-[1.14] w-[25px]"
                    />
                  </Link>
                  <div className="mt-1.5">Earn</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center px-2.5 py-2 rounded-lg min-h-[54px]">
                  <Link to="/airdrop">
                    <img
                      loading="lazy"
                      src={airdropIcon}
                      alt='Airdrop'
                      className="object-contain aspect-square w-[22px]"
                    />
                  </Link>
                  <div className="mt-1.5">Airdrop</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;

