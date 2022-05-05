import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05b5ba',
    paddingHorizontal: 15,
    position: 'relative',
    paddingBottom: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#063970',
    marginVertical: 10,
  },
  titleTodo: {
    fontSize: 16,
    color: '#063970',
    fontWeight: 'bold',
  },
  todo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e3c11b',
    marginVertical: 7,
    padding: 10,
    borderRadius: 7,
  },
  deleteTodo: {
    width: 25,
    height: 25,
    zIndex: 999999999999,
  },
  btnsAddTodo: {
    position: 'absolute',
    bottom: 2,
    right: width * 0.4,
  },
  addTodo: {
    width: 50,
    height: 50,
    backgroundColor: '#f56262',
    borderRadius: 25,
    zIndex: 999999999999,
  },
  noTasks: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  noTasksImage: {
    width: 200,
    height: height * 0.45,
    marginBottom: 5,
  },
  noTasksHere: {
    fontSize: 16,
    color: 'wheat',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#00a573',
    borderWidth: 2,
    paddingHorizontal: 35,
    paddingTop: 25,
    paddingBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.8,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: width * 0.25,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputTask: {
    borderWidth: 1,
    borderColor: '#063970',
    borderRadius: 7,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontWeight: '500',
    width: width * 0.7,
    color: '#063970',
  },
  actionsTodo: {
    marginTop: 15,
    display: 'flex',
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
