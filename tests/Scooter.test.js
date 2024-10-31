const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})
  //checks initialization of properties

  it('station is assigned correctly', () => {
    const scooter2 = new Scooter('nyc')
    expect(scooter2.station).toBe('nyc')
    
  })
  it('scooter serial increments correctly', () => {
    const scooter3 = new Scooter('nyc')
    expect(scooter3.serial).toBe(3)
    
  })
  it('scooter charge initialized to 100', () => {
    const scooter4 = new Scooter('nyc')
    expect(scooter4.charge).toBe(100)
    
  })
  it('scooter isBroken is initialized correctly', () => {
    const scooter5 = new Scooter('nyc')
    expect(scooter5.isBroken).toBe(false)
    
  })

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  it('throws error when scooter charge is insufficient', () => {
    const scooter6 = new Scooter('nyc')
    const user1 = new User('George')
    expect(scooter6.rent(user1)).toBe()
  })
  

  //dock method

  //requestRepair method

  //charge method

})
