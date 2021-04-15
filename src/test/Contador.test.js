import Contador from '../Contador'
import { shallow } from 'enzyme'



describe('Pruebas sobre el componente contador',()=>{

   test('Probando con enzyme', ()=>{

    

    const wrapper = shallow(<Contador valor1={4} valor2={2} nombre={'Leidy Vanesa'} />)
    expect(wrapper).toMatchSnapshot()

})

    test('Simular click boton Sumar',() => {
    const wrapper = shallow(<Contador valor1={4} valor2={2} nombre={'Leidy Vanesa'}/>)
    const btn1 = wrapper.find('button').at(0).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toEqual('6')
  
  })


    test('Simular click boton Restar',() => {
    const wrapper = shallow(<Contador valor1={4} valor2={2} nombre={'Leidy Vanesa'}/>)
    const btn1 = wrapper.find('button').at(1).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toEqual('2')
  
  })
  
})