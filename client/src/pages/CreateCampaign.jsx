import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { money, angelHalo } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleSubmit = () => {};

  return (
    <div className="bg-[#1c1c24] flex justify-cetner items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && "Loader..."}

      <img src={angelHalo} className="w-[160px] mt-0" />
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Movement!
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px] ">
          <FormField
            labelName="Your Name *"
            placeholder="Enter your name"
            inputType="text"
            value={form.name}
            handleChange={() => {}}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Enter campaign title"
            inputType="text"
            value={form.title}
            handleChange={() => {}}
          />
        </div>
        <FormField
          labelName="Campaign Description *"
          placeholder="Enter campaign description"
          isTextArea
          value={form.description}
          handleChange={() => {}}
        />

        <FormField
          labelName="Goal *"
          placeholder="ETH 0.10"
          inputType="text"
          value={form.target}
          handleChange={() => {}}
        />
        <FormField
          labelName="Campaign Duration *"
          placeholder="End Date"
          inputType="date"
          value={form.deadline}
          handleChange={() => {}}
        />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Create your movement"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
