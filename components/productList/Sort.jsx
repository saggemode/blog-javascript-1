import React, { ChangeEvent } from "react";
import { BsFilterLeft, BsArrowDown } from "react-icons/bs";
import { radioBtnValue } from "../../mock/sortRadioInput";


const Sort = ({ selectedBtn: selectedRadioBtn, onChangeSelectedBtn }) => {
  const isRadioSelected = (value) =>
    value === selectedRadioBtn ? true : false;

  return (
    <div className="my-4 pb-2 flex flex-wrap border-b-2 border-slate-300">
      <div className="flex items-center">
        <div className="flex items-center">
          <BsFilterLeft style={{ fontSize: "1.5rem" }} />
          <BsArrowDown />
        </div>
        {/* <h5 className="ltr:ml-1 rtl:mr-1">{sort}</h5> */}
      </div>

      <div className="flex flex-wrap items-center">
        {radioBtnValue.map((radioInput) => {
          return (
            <div key={radioInput} className="px-1 md:px-2 mx-2 my-1 sm:my-0">
              <label
                htmlFor={radioInput}
                className={`text-sm  cursor-pointer ${
                  radioInput === selectedRadioBtn
                    ? "text-palette-primary font-bold"
                    : "text-palette-mute/80 hover:text-palette-base transition-all"
                }`}
              >
                {radioInput}
              </label>
              <input
                type="radio"
                className="hidden"
                id={radioInput}
                value={selectedRadioBtn}
                name="sortProduct"
                checked={isRadioSelected(radioInput)}
                onChange={onChangeSelectedBtn}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sort;
