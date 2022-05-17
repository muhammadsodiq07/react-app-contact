import React, { Component } from 'react'
import Categores from './Categores.jsx/Categores'
import Conlist from './ConList/Conlist'
import Form from './Form/Form'
import './contact.scss'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      newObj: {
        name: undefined,
        number: undefined,
        categores: undefined
      },
      contacts: [
        {
          id: 1,
          name: 'Muhammadsodiq',
          number: 909820222,
          categores: 'Family',
          count: 1,
        },
        {
          id: 2,
          name: 'Azizbek',
          number: 902232233,
          categores: `Najot Ta'lim`,
          count: 1,
        },
      ],
      newContacts: [
        {
          id: 1,
          name: 'Muhammadsodiq',
          number: 909820222,
          categores: 'Family',
          count: 1,
        },
        {
          id: 2,
          name: 'Azizbek',
          number: 902232233,
          categores: `Najot Ta'lim`,
          count: 1,
        },
      ]
    }
  }

  inpChange = (e) => {
    if (e.target.value !== '') {
      let obj = {}
      if (e.target.id === 'last') {
        obj.name = e.target.value;
      }
      if (e.target.id === 'select') {
        console.log(e.target.value);
        obj.categores = e.target.value;
      }
      if (e.target.id === 'number') {
        obj.number = e.target.value;
      }
      this.setState({ newObj: { ...this.state.newObj, ...obj } })
    }
  }

  inputsFunc = (e) => {
    e.preventDefault()
    this.setState({ contacts: [...this.state.newContacts, this.state.newObj] })
    this.setState({ newContacts: [...this.state.newContacts, this.state.newObj] })
    e.target.reset();
  }

  sortFunc = (e) => {
    if (e.target.id === 'allBtn') {
      this.setState({ contacts: [...this.state.newContacts] })
    }

    if (e.target.id === 'workBtn') {
      let newArr = []
      this.state.newContacts.map((obj, i) => {
        if (obj.categores === `Najot Ta'lim`) {
          newArr.push(obj)
        }
      })
      this.setState({ contacts: [...newArr] })
    }

    if (e.target.id === 'familyBtn') {
      let newArr = []
      this.state.newContacts.map((obj, i) => {
        if (obj.categores === 'Family') {
          newArr.push(obj)
        }
      })
      this.setState({ contacts: [...newArr] })
    }

    if (e.target.id === 'friendsBtn') {
      let newArr = []
      this.state.newContacts.map((obj, i) => {
        if (obj.categores === 'Friends') {
          newArr.push(obj)
        }
      })
      this.setState({ contacts: [...newArr] })
    }
  }


  render() {
    return (
      <section className="contact con">
        <div className="con__inner">
          <div className="con__left">
            <Form changeFunc={this.inpChange} inputsFunc={this.inputsFunc} importObj={this.importObj} />
          </div>
          <div className="con__right">
            <Categores sortFunc={this.sortFunc} />
            <div className="con__contacts-box">
              <Conlist obj={this.state.contacts} removFunc={this.removFunc} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact