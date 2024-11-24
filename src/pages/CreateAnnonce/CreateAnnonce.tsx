import React from "react";
import "./CreateAnnonce.css";
import { CreateAnnonceProps, useCreateAnnonce } from "./useCreateAnnonce";
import FormCard from "../../components/FormCard/FormCard";
import ReusableTextField from "../../components/ReusableTextField/ReusableTextField";
import CustomButton from "../../components/CustomButton/CustomButton";
import {
  MdTitle,
  MdCategory,
  MdLocationOn,
  MdOutlineProductionQuantityLimits,
  MdOutlineWhatshot,
} from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import CardHeader from "../../components/CardHeader/CardHeader";
import { IoPricetag } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
import { FaEuroSign, FaTachometerAlt } from "react-icons/fa";
import {
  BsBookmarkStar,
  BsCalendar2Date,
  BsFillFuelPumpFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { SiCodeclimate } from "react-icons/si";
import ReusableSelect from "../../components/ReusableSelect/ReusableSelect";
import {
  climatisationItems,
  conditionItems,
  fuelTypeItems,
  transactionItems,
  typeGearBoxItems,
  typeVehiculeItems,
} from "../../utils/createAnnonceArrays";
import { Option } from "../../models/Inputs/FormType";
import DefaultAutoComplete from "../../components/DefaultAutoComplete/DefaultAutoComplete";
import UploadMultipleImages from "../../components/UploadMultipleImages/UploadMultipleImages";

const CreateAnnonce: React.FC<CreateAnnonceProps> = (props) => {
  const {
    formik,
    step,
    loading,
    successMessage,
    errorRegisterMsg,
    markOptions,
    modelOptions,
    textsInputsCreateAnnonce,
    setStep,
    changeStep,
    handleImagesChange,
  } = useCreateAnnonce(props);

  return (
    <section className="section">
      <CardHeader
        backPageText={"Retour à la page de Profil"}
        title="Création d'une annonce"
      />

      <FormCard>
        <div
          className=" bg-blue-500 rounded-full  absolute top-0  left-0  "
          style={{
            width:
              step === 1
                ? "25%"
                : step === 2
                ? "50%"
                : step === 3
                ? "75%"
                : "100%",
            height: "5px",
          }}
        ></div>
        {errorRegisterMsg && (
          <div className="text-red-500 text-center text-xs md:text-sm  absolute bottom-2 md:bottom-4 left-0 right-0   ">
            {" "}
            {/* Fixed height for error message */}
            {errorRegisterMsg}
          </div>
        )}

        {successMessage && (
          <div className="text-green-500 text-center text-xs md:text-sm  absolute top-2 md:top-4 left-0 right-0   ">
            {" "}
            {/* Fixed height for error message */}
            {successMessage}
          </div>
        )}

        <div className={` top-2 left-2 ${step > 1 ? "block" : "opacity-0"} `}>
          <CustomButton
            onClick={() => {
              if (step > 1) {
                setStep(step - 1);
              }
            }}
            colorConfirm="back"
            width=""
          >
            <span className="flex gap-2 items-center text-xs md:text-sm justify-center">
              <IoMdArrowRoundBack color="white" className="text-xs" />
              <span className="block">Step {step - 1}</span>
            </span>
          </CustomButton>
        </div>

        <h2
          className={`text-center text-lg font-bold ${
            step == 4 ? "pb-0" : "pb-4"
          }   pt-3 md:pt-0`}
        >
          {`Étape ${step}: ${
            step === 1
              ? "Informations de l'annonce"
              : step === 2
              ? "Informations du véhicule"
              : step === 3
              ? "Description"
              : "Images"
          }`}
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          id="create-annonce-form"
          // mt-6
          className=" grid grid-cols-1  gap-6 md:gap-4"
        >
          {/* {---------------------- step 1 ---------------------- } */}

          {step === 1 && (
            <>
              {/* -----title---- */}
              <ReusableTextField
                icon1={<MdTitle className="iconInput" />}
                positionIcon1="start"
                label={textsInputsCreateAnnonce.title.label}
                helperText={textsInputsCreateAnnonce.title.helperText}
                afterFocus={textsInputsCreateAnnonce.title.afterFocus}
                title={textsInputsCreateAnnonce.title.title}
                placeholder={textsInputsCreateAnnonce.title.placeholder}
                id={textsInputsCreateAnnonce.title.id}
                type={textsInputsCreateAnnonce.title.type}
                name={textsInputsCreateAnnonce.title.name}
                required={textsInputsCreateAnnonce.title.required}
                errorText={formik.errors.title}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
              />

              {/* -----price---- */}
              <ReusableTextField
                icon1={<IoPricetag className="iconInput" />}
                positionIcon1="start"
                icon2={<FaEuroSign className="iconInput" />}
                positionIcon2="end"
                label={textsInputsCreateAnnonce.price.label}
                helperText={textsInputsCreateAnnonce.price.helperText}
                afterFocus={textsInputsCreateAnnonce.price.afterFocus}
                title={textsInputsCreateAnnonce.price.title}
                placeholder={textsInputsCreateAnnonce.price.placeholder}
                id={textsInputsCreateAnnonce.price.id}
                type={textsInputsCreateAnnonce.price.type}
                name={textsInputsCreateAnnonce.price.name}
                required
                errorText={formik.errors.price}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
              />
              {/* -----type---- */}
              <ReusableSelect
                icon={<MdCategory className="iconInput" />}
                options={typeVehiculeItems as Option[]}
                title={textsInputsCreateAnnonce.type.title}
                label={textsInputsCreateAnnonce.type.label}
                id={textsInputsCreateAnnonce.type.id}
                type={textsInputsCreateAnnonce.type.type}
                size="medium"
                placeholder={textsInputsCreateAnnonce.type.placeholder}
                required={textsInputsCreateAnnonce.type.required}
                // formHelperText={inputLevel.helperText}
                name={textsInputsCreateAnnonce.type.name}
                heightFormHelperText={2}
                helperText={textsInputsCreateAnnonce.type.helperText}
                afterFocus={textsInputsCreateAnnonce.type.afterFocus}
                errorText={formik.errors.type}
                onBlur={formik.handleBlur}
                value={formik.values.type}
                onChange={formik.handleChange}
                error={formik.touched.type && Boolean(formik.errors.type)}
                onSave={() => {}}
                disabled={false}
              />

              {/* -----transaction---- */}
              <ReusableSelect
                icon={<BiTransfer className="iconInput" />}
                options={transactionItems as Option[]}
                title={textsInputsCreateAnnonce.transaction.title}
                placeholder={textsInputsCreateAnnonce.transaction.placeholder}
                label={textsInputsCreateAnnonce.transaction.label}
                id={textsInputsCreateAnnonce.transaction.id}
                type={textsInputsCreateAnnonce.transaction.type}
                size="medium"
                required={textsInputsCreateAnnonce.transaction.required}
                // formHelperText={inputLevel.helperText}
                name={textsInputsCreateAnnonce.transaction.name}
                heightFormHelperText={2}
                helperText={textsInputsCreateAnnonce.transaction.helperText}
                afterFocus={textsInputsCreateAnnonce.transaction.afterFocus}
                errorText={formik.errors.transaction}
                onBlur={formik.handleBlur}
                value={formik.values.transaction}
                onChange={formik.handleChange}
                error={
                  formik.touched.transaction &&
                  Boolean(formik.errors.transaction)
                }
                onSave={() => {}}
                disabled={false}
              />
              {/* -----condition---- */}
              <ReusableSelect
                icon={<MdOutlineWhatshot className="iconInput" />}
                options={conditionItems as Option[]}
                title={textsInputsCreateAnnonce.condition.title}
                label={textsInputsCreateAnnonce.condition.label}
                placeholder={textsInputsCreateAnnonce.condition.placeholder}
                id={textsInputsCreateAnnonce.condition.id}
                type={textsInputsCreateAnnonce.condition.type}
                size="medium"
                name={textsInputsCreateAnnonce.condition.name}
                required={textsInputsCreateAnnonce.condition.required}
                helperText={textsInputsCreateAnnonce.condition.helperText}
                afterFocus={textsInputsCreateAnnonce.condition.afterFocus}
                errorText={formik.errors.condition}
                onBlur={formik.handleBlur}
                value={formik.values.condition}
                onChange={formik.handleChange}
                error={
                  formik.touched.condition && Boolean(formik.errors.condition)
                }
                onSave={() => {}}
                disabled={false}
              />
              {/* -----quantity---- */}
              {/* if condition is not "Neuf" then show the quantity field */}
              {formik.values.condition === "Neuf" && (
                <ReusableTextField
                  icon1={
                    <MdOutlineProductionQuantityLimits className="iconInput" />
                  }
                  positionIcon1="start"
                  label={textsInputsCreateAnnonce.quantity.label}
                  helperText={textsInputsCreateAnnonce.quantity.helperText}
                  afterFocus={textsInputsCreateAnnonce.quantity.afterFocus}
                  title={textsInputsCreateAnnonce.quantity.title}
                  placeholder={textsInputsCreateAnnonce.quantity.placeholder}
                  id={textsInputsCreateAnnonce.quantity.id}
                  type={textsInputsCreateAnnonce.quantity.type}
                  name={textsInputsCreateAnnonce.quantity.name}
                  required
                  errorText={formik.errors.quantity}
                  onBlur={formik.handleBlur}
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.quantity && Boolean(formik.errors.quantity)
                  }
                />
              )}
            </>
          )}
          {/* {---------------------- step 2 ---------------------- } */}

          {step === 2 && (
            <>
              {/* -----city---- */}
              <ReusableTextField
                icon1={<MdLocationOn className="iconInput" />}
                positionIcon1="start"
                label={textsInputsCreateAnnonce.city.label}
                helperText={textsInputsCreateAnnonce.city.helperText}
                afterFocus={textsInputsCreateAnnonce.city.afterFocus}
                title={textsInputsCreateAnnonce.city.title}
                placeholder={textsInputsCreateAnnonce.city.placeholder}
                id={textsInputsCreateAnnonce.city.id}
                type={textsInputsCreateAnnonce.city.type}
                name={textsInputsCreateAnnonce.city.name}
                required
                errorText={formik.errors.city}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
              />

              {/* -----mark---- */}
              <DefaultAutoComplete
                options={markOptions}
                icon1={<MdCategory className="iconInput" />}
                positionIcon1="start"
                title={textsInputsCreateAnnonce.mark.title}
                label={textsInputsCreateAnnonce.mark.label}
                id={textsInputsCreateAnnonce.mark.id}
                type={textsInputsCreateAnnonce.mark.type}
                placeholder={textsInputsCreateAnnonce.mark.placeholder}
                size="medium"
                name={textsInputsCreateAnnonce.mark.name}
                // heightFormHelperText={2}
                helperText={textsInputsCreateAnnonce.mark.helperText}
                afterFocus={textsInputsCreateAnnonce.mark.afterFocus}
                required
                errorText={formik.errors.mark}
                onBlur={formik.handleBlur}
                value={formik.values.mark}
                onChange={formik.handleChange}
                error={formik.touched.mark && Boolean(formik.errors.mark)}
                onSave={() => {}}
                OptionDisabled={[]}
                disableCloseOnSelect={false}
              />

              {/* -----model---- */}
              {formik.values.mark && (
                <DefaultAutoComplete
                  options={modelOptions}
                  icon1={<BsBookmarkStar className="iconInput" />}
                  positionIcon1="start"
                  title={textsInputsCreateAnnonce.model.title}
                  label={textsInputsCreateAnnonce.model.label}
                  id={textsInputsCreateAnnonce.model.id}
                  type={textsInputsCreateAnnonce.model.type}
                  placeholder={textsInputsCreateAnnonce.model.placeholder}
                  size="medium"
                  name={textsInputsCreateAnnonce.model.name}
                  // heightFormHelperText={2}
                  helperText={textsInputsCreateAnnonce.model.helperText}
                  afterFocus={textsInputsCreateAnnonce.model.afterFocus}
                  required
                  errorText={formik.errors.model}
                  onBlur={formik.handleBlur}
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  error={formik.touched.model && Boolean(formik.errors.model)}
                  onSave={() => {}}
                  OptionDisabled={[]}
                  disableCloseOnSelect={false}
                />
              )}

              {/* -----year---- */}
              <ReusableTextField
                icon1={<BsCalendar2Date className="iconInput" />}
                positionIcon1="start"
                label={textsInputsCreateAnnonce.year.label}
                helperText={textsInputsCreateAnnonce.year.helperText}
                afterFocus={textsInputsCreateAnnonce.year.afterFocus}
                title={textsInputsCreateAnnonce.year.title}
                placeholder={textsInputsCreateAnnonce.year.placeholder}
                id={textsInputsCreateAnnonce.year.id}
                type={textsInputsCreateAnnonce.year.type}
                name={textsInputsCreateAnnonce.year.name}
                required
                errorText={formik.errors.year}
                onBlur={formik.handleBlur}
                value={formik.values.year}
                onChange={formik.handleChange}
                error={formik.touched.year && Boolean(formik.errors.year)}
              />
              {/* -----fuelType ===  type de carburant---- */}
              <ReusableSelect
                icon={<BsFillFuelPumpFill className="iconInput" />}
                options={fuelTypeItems as Option[]}
                label={textsInputsCreateAnnonce.fuelType.label}
                helperText={textsInputsCreateAnnonce.fuelType.helperText}
                afterFocus={textsInputsCreateAnnonce.fuelType.afterFocus}
                title={textsInputsCreateAnnonce.fuelType.title}
                placeholder={textsInputsCreateAnnonce.fuelType.placeholder}
                id={textsInputsCreateAnnonce.fuelType.id}
                type={textsInputsCreateAnnonce.fuelType.type}
                name={textsInputsCreateAnnonce.fuelType.name}
                required
                errorText={formik.errors.fuelType}
                onBlur={formik.handleBlur}
                value={formik.values.fuelType}
                onChange={formik.handleChange}
                error={
                  formik.touched.fuelType && Boolean(formik.errors.fuelType)
                }
                onSave={() => {}}
                disabled={false}
              />
              {/* -----gearbox ===  type de boite de vitesse ---- */}
              <ReusableSelect
                icon={<TbManualGearbox className="iconInput" />}
                options={typeGearBoxItems as Option[]}
                label={textsInputsCreateAnnonce.gearbox.label}
                helperText={textsInputsCreateAnnonce.gearbox.helperText}
                afterFocus={textsInputsCreateAnnonce.gearbox.afterFocus}
                title={textsInputsCreateAnnonce.gearbox.title}
                placeholder={textsInputsCreateAnnonce.gearbox.placeholder}
                id={textsInputsCreateAnnonce.gearbox.id}
                type={textsInputsCreateAnnonce.gearbox.type}
                name={textsInputsCreateAnnonce.gearbox.name}
                required
                errorText={formik.errors.gearbox}
                onBlur={formik.handleBlur}
                value={formik.values.gearbox}
                onChange={formik.handleChange}
                error={formik.touched.gearbox && Boolean(formik.errors.gearbox)}
                onSave={() => {}}
                disabled={false}
              />
              {/* -----climatisation ===  état de la climatisation ---- */}
              <ReusableSelect
                icon={<SiCodeclimate className="iconInput" />}
                options={climatisationItems as Option[]}
                label={textsInputsCreateAnnonce.climatisation.label}
                helperText={textsInputsCreateAnnonce.climatisation.helperText}
                afterFocus={textsInputsCreateAnnonce.climatisation.afterFocus}
                title={textsInputsCreateAnnonce.climatisation.title}
                placeholder={textsInputsCreateAnnonce.climatisation.placeholder}
                id={textsInputsCreateAnnonce.climatisation.id}
                type={textsInputsCreateAnnonce.climatisation.type}
                name={textsInputsCreateAnnonce.climatisation.name}
                required
                errorText={formik.errors.climatisation}
                onBlur={formik.handleBlur}
                value={formik.values.climatisation}
                onChange={formik.handleChange}
                error={
                  formik.touched.climatisation &&
                  Boolean(formik.errors.climatisation)
                }
                onSave={() => {}}
                disabled={false}
              />

              {/* -----klm_counter ===  kilométrage ---- */}

              <ReusableTextField
                icon1={<FaTachometerAlt className="iconInput" />}
                positionIcon1="start"
                icon2={
                  <p className="text-xs text-gray-500 text-center font-bold">
                    KM
                  </p>
                }
                positionIcon2="end"
                label={textsInputsCreateAnnonce.klm_counter.label}
                helperText={textsInputsCreateAnnonce.klm_counter.helperText}
                afterFocus={textsInputsCreateAnnonce.klm_counter.afterFocus}
                title={textsInputsCreateAnnonce.klm_counter.title}
                placeholder={textsInputsCreateAnnonce.klm_counter.placeholder}
                id={textsInputsCreateAnnonce.klm_counter.id}
                type={textsInputsCreateAnnonce.klm_counter.type}
                name={textsInputsCreateAnnonce.klm_counter.name}
                required
                errorText={formik.errors.klm_counter}
                onBlur={formik.handleBlur}
                value={formik.values.klm_counter}
                onChange={formik.handleChange}
                error={
                  formik.touched.klm_counter &&
                  Boolean(formik.errors.klm_counter)
                }
              />

              {/* -----te_number ===  numéro de la carte grise ---- */}
              <ReusableTextField
                icon1={<BsFillTelephoneFill className="iconInput" />}
                positionIcon1="start"
                label={textsInputsCreateAnnonce.phoneNumber.label}
                helperText={textsInputsCreateAnnonce.phoneNumber.helperText}
                afterFocus={textsInputsCreateAnnonce.phoneNumber.afterFocus}
                title={textsInputsCreateAnnonce.phoneNumber.title}
                placeholder={textsInputsCreateAnnonce.phoneNumber.placeholder}
                id={textsInputsCreateAnnonce.phoneNumber.id}
                type={textsInputsCreateAnnonce.phoneNumber.type}
                name={textsInputsCreateAnnonce.phoneNumber.name}
                required
                errorText={formik.errors.phoneNumber}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
              />
            </>
          )}

          {/* {---------------------- step 3 ---------------------- } */}

          {step === 3 && (
            <>
              <ReusableTextField
                // icon1={<MdDescription className="iconInput" />}
                // positionIcon1="start"
                multiline={true}
                rows={4}
                label={textsInputsCreateAnnonce.description.label}
                helperText={textsInputsCreateAnnonce.description.helperText}
                afterFocus={textsInputsCreateAnnonce.description.afterFocus}
                title={textsInputsCreateAnnonce.description.title}
                placeholder={textsInputsCreateAnnonce.description.placeholder}
                id={textsInputsCreateAnnonce.description.id}
                type={textsInputsCreateAnnonce.description.type}
                name={textsInputsCreateAnnonce.description.name}
                required
                errorText={formik.errors.description}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
              />
            </>
          )}
          {/* {---------------------- step 4 ---------------------- } */}

          {step === 4 && (
            <>
              <UploadMultipleImages
                name="images"
                text={
                  <p className="text-xs text-gray-500 py-2 ">
                    ps: la première photo sera la photo de couverture <br />
                    <span className="font-bold">
                      vous pouvez changer l'ordre des photos en les faisant
                      glisser et déposer
                    </span>
                  </p>
                }
                maxFileSize={5} // Set max file size in MB
                onChange={handleImagesChange}
              />
            </>
          )}
          <div className="text-center mt-6 mb-6">
            <CustomButton
              onClick={() => changeStep(step)}
              colorConfirm="blue"
              disabled={loading}
              type="submit"
            >
              {loading ? "Chargement..." : step === 4 ? "Poster" : "Continuer"}
            </CustomButton>
          </div>
        </form>
      </FormCard>
    </section>
  );
};

export default CreateAnnonce;
