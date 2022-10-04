import React from 'react'
import Nav from '../UI/NavBar/Nav'
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';


const Header = () => {

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('')
  const [nomer, setNomer] = React.useState(+7)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeInputValue = (event) => {
    setNomer(event.target.value)
  }
  const onChangeInputName = (event) => {
    setName(event.target.value)
  }

  const obj = {
    name,
    nomer
  }

  const onClickSend = async (obj) => {
    await axios.post("https://airpodsapi.herokuapp.com/api/orders", obj)
    alert("Ваша заявка отправленна")
    setOpen(false);
  }



  return (
    <>
      <div className="main-body">
        <Nav />
        <div className='content'>
          <div className="left_info">
            <h1>Apple Airpods PRO</h1>
            <p className="left_info_text">Знаменитые True Wireless наушники от Apple получили новое воплощение в серии AirPods PRO</p>
            <div className="price">
              <div className="old_price">
                <p>Старая цена</p>
                <span>12990 ₽.</span>
              </div>
              <div className="new_price">
                <p>Новая цена</p>
                <span>4990 ₽.</span>
              </div>
            </div>
            <div className='button'>
              <button onClick={handleClickOpen} className="order_button">Заказать</button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Заполните форму ниже</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Вам перезвонят в течение 5 минут

                  </DialogContentText>
                  <FormControl>
                    <TextField
                      value={name}
                      onChange={onChangeInputName}
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Имя"
                      type="text"
                      variant="standard"
                    >

                    </TextField>


                    <TextField
                      value={nomer}
                      onChange={onChangeInputValue}
                      margin="dense"
                      id="tel"
                      label="Телефон"
                      type="number"
                      variant="standard"
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 11)
                      }}
                    />
                  </FormControl>


                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Закрыть</Button>
                  <Button onClick={() => onClickSend(obj)}>Отправить</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>

          <div className="right_info">
            <img className="airpods" src="/img/bigairpods.png" alt="airpods"></img>
            <p>В подарок чехол</p>
            <img src="/img/gift.svg" alt="gift"></img>
          </div>
        </div>

      </div>
      <div className="plus_body">
        <ul>
          <li>
            <img src="/img/accept.svg" alt="plus"></img>
            <p>Насыщенные бассы</p>
          </li>
          <li>
            <img src="/img/accept.svg" alt="plus"></img>
            <p>Чистое звучание</p>
          </li>
          <li>
            <img src="/img/accept.svg" alt="plus"></img>
            <p>Выросло качество звука</p>
          </li>
          <li>
            <img src="/img/accept.svg" alt="plus"></img>
            <p>Они стали еще меньше</p>
          </li>
          <li>
            <img src="/img/accept.svg" alt="plus"></img>
            <p>Они стали еще комфортнее</p>
          </li>
        </ul>
      </div>
    </>


  )
}

export default Header
