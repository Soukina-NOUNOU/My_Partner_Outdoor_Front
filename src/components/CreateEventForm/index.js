import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// == Import
import './styles.scss';
import { postEvent } from '../../api/event';

import { changeField, resetFormField, setOrganizerId } from '../../store/reducers/createEvent';

import { fetchSports } from '../../api/sports';

// == Composant
function CreateEventForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const event = useSelector((state) => state.createEvent.createEvent);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(postEvent(navigate));
  };

  const handleChange = (event) => {

    dispatch(changeField({ value: event.target.value, name: event.target.name }));
  };

  // Reset du formulaire et retour à la page d'accueil sur le bouton annuler
  const handleClickCancel = () => {
    dispatch(resetFormField())
    window.scrollTo({ top: 0 })
    navigate('/home');
  };


  useEffect(() => {
    dispatch(setOrganizerId(parseInt(localStorage.getItem('userId'))));
    dispatch((fetchSports()));
  }, []);


  const sports = useSelector((state) => state.sports.sports);


  return (
    <div className='createEvent'>
      <h1 className='title'>Création de votre événement</h1>
      <form onSubmit={handleSubmit} className='form'>
        <fieldset className='form__up'>
          <h5 className='form__title'>Essentiel</h5>
          <div className='form__right'>
            <div className='form__labelinput'>
              <label className='form__label'>Nom de l'événement :</label>

              <input className='form__input' type="text" id="title" name="title" value={event.title} onChange={handleChange} />

            </div>
            <div className='form__labelinput'>
              <label className='form__label'>Sport :</label>
              <select className='form__input' id="sport" name="sport" value={event.sport} onChange={handleChange}>
                <option value=" "></option>
                {sports.map((sport) => (

                  <option key={sport.id} value={sport.name}>{sport.name}</option>

                ))}
              </select>
            </div>
            <div className='form__labelinput'>
              <label className='form__label'>Nombre de participant souhaité :</label>
              <input type='number' className='form__input' id="participants" name="nb_participant" value={event.nb_participant} onChange={handleChange} />

            </div>
          </div>
        </fieldset>

        <fieldset className='form__middle'>
          <h5 className='form__title'>Coordonnées</h5>
          <div className='form__right'>
            <div className='form__adress'>
              <div className='form__adress__up'>
                <div className='form__adress__up__number'>
                  <label className='form__label__number'>Numéro :</label>
                  <input className='form__input__number' type="text" id="number" name="number" value={event.number} onChange={handleChange}></input>
                </div>
                <div className='form__adress__up__street'>
                  <label className='form__label__street'>Rue :</label>
                  <input className='form__input__street' type="text" id="street" name="street" value={event.street} onChange={handleChange}></input>
                </div>
              </div>
              <div className='form__adress__bottom'>
                <div className='form__adress__bottom__postal'>
                  <label className='form__label__postal'>Postal :</label>
                  <input className='form__input__postal' type="text" id="postal-code" name="zip_code" value={event.zip_code} onChange={handleChange}></input>
                </div>
                <div className='form__adress__bottom__city'>
                  <label className='form__label__city'>Ville :</label>
                  <input className='form__input__city' type="text" id="city" name="city" value={event.city} onChange={handleChange}></input>
                </div>
              </div>
            </div>
            <div className='form__date'>
              <div className='form__date__hours__up' >
                <div className='form__hours__up' >
                  <label className='form__label'>Heure de début :</label>

                  <input className='form__input__time' type="time" name="start_hour" value={event.start_hour} onChange={handleChange} ></input>


                </div>
                <div className='form__date'>
                  <div className='form__date__up' >
                    <label className='form__label'>Date de début :</label>
                    <input className='form__input__date' type="date" id="start_date" name="start_date" value={event.start_date} onChange={handleChange} min={event.start_date} />

                  </div>
                </div>
              </div>
              <div className='form__date__hours__bottom' >

                <div className='form__hours__bottom' >
                  <label className='form__label'>Heure de fin :</label>
                  <input className='form__input__time' type="time" name="finish_hour" value={event.finish_hour} onChange={handleChange} ></input>
                </div>
                <div className='form__date__bottom'>
                  <label className='form__label'>Date de fin :</label>
                  <input className='form__input__date' type="date" id="end_date" name="finish_date" value={event.finish_date} onChange={handleChange} min={event.finish_date} />
                </div>

              </div>
              <div className='form__price'>
                <label className='form__label'>Prix :</label>

                <input className='form__input' type="number" min={0} name="price" value={event.price} onChange={handleChange}>

                </input>
              </div>
            </div>
          </div>

        </fieldset>

        <fieldset className='form__bottom'>
          <h5 className='form__title'>Informations supplémentaires</h5>
          <div className='form__right'>
            <label className='form__label'>Niveau souhaité :</label>
            <div className='form__bottom__radio' >
              <div className='form__bottom__radio__debutant' >

                <input className='form__input__radio' type="radio" name="level" onChange={handleChange} value='Débutant' checked={event.level === "Débutant"}></input>
                <label className='form__label__radio'>Débutant</label>
              </div>
              <div className='form__bottom__radio__debutant' id="niveau">
                <input className='form__input__radio' type="radio" name="level" onChange={handleChange} value='Intermédiaire' checked={event.level === "Intermédiaire"}></input>

                <label className='form__label__radio'>Intermédiaire</label>
              </div>
              <div className='form__bottom__radio__debutant' id="niveau">
                <input className='form__input__radio' type="radio" name="level" onChange={handleChange} value='Confirmé' checked={event.level === "Confirmé"}></input>
                <label className='form__label__radio'>Confirmé</label>
              </div>
            </div>
            {/* <div className='form__bottom__photo' id="niveau">
              <label className='form__label'>Photo :</label>
              <label htmlFor="file" className="form__label__file">Changer photo</label>
              <input className='form__input__photo' type="file" accept="image/png, image/jpg, image/gif, image/jpeg" name="photo" value={formValues.nbParticipant} onChange={handleChange}></input>
            </div> */}
            <div className='form__bottom__description' id="niveau">
              <label className='form__label'>Description :</label>
              <textarea className='form__input' id="description" name="description" rows="5" cols="40" value={event.description} onChange={handleChange}></textarea>
            </div>
            <div className='form__bottom__materials' id="niveau">
              <label className='form__label'>Matériels à apporter :</label>

              <textarea className='form__input' id="materiels" name="equipement" rows="5" cols="40" value={event.equipement} onChange={handleChange}></textarea>
            </div>
            <div className='form__bottom__button' id="niveau">
              <button className='form__bottom__button__confirm' type="submit" >Confirmer</button>
              <button onClick={handleClickCancel} className='form__bottom__button__cancel' type="button" >Annuler</button>

            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

// == Export
export default CreateEventForm;
