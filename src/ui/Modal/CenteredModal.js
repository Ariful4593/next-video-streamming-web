import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        <video className='w-100' src="
https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" controls="controls
      poster='https://picsum.photos/1920/1080?random=1'
        "></video>
      </Modal.Body>
    </Modal>
  );
}

export default CenteredModal;