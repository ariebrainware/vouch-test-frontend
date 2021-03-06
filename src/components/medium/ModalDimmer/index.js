import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import FormAddTicket from '../FormAddTicket'

import 'animate.css'

class ModalDimmer extends Component {
  state = { open: false }
  
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => {       
      this.setState({ open: false })
    }

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button inverted onClick={this.show(true)}>Add Ticket</Button>

        <Modal className='animated fadeIn delay-1s' dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add Ticket</Modal.Header>
          <Modal.Content image>
            <FormAddTicket />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ModalDimmer