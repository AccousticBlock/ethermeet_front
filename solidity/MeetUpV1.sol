contract MeetUpV1 is Ownable {
  using SafeMath for uint256;
  enum State { BeforeMeetup, OnMeeting, OnRefunding, RefundingFinished, Closed }
  address public host;
  uint public capability;
  uint public fee;
  uint public deposited;
  uint public password;
  State public state;
  uint public endDate;
  address[] attendees;
  address[] refundedAttendees;

  modifier onlyHost () {
     require(host == msg.sender); 
     _;
  }
  event RequestArrive(address attendee, uint fee);
  event OnMeeting();
  event Refunded(address host, uint fee);
  event RefundsEnabled();
  event RefundingFinished();
  event Closed();

  function MeetUpV1(address _host, uint _capability, uint _password, uint _endDate) payable {
    host = _host;
    capability = _capability;
    password = _password;
    endDate = endDate;
    state = State.BeforeMeetup;
    deposited = 0;
  }

  function requestWithDeposit(address attendee) public payable {
    //require(state == State.BeforeMeetup);
    emit RequestArrive(msg.sender, msg.value);
    if (msg.value < 0) throw;
    attendees.push(attendee);
  }

  function close() onlyOwner public {
    require(state != State.Closed);
    state = State.Closed;
    emit Closed();
  }

  function enableRefunds() onlyOwner public {
    require(state == State.OnMeeting);
    state = State.OnRefunding;
    emit RefundsEnabled();
  }

  function refund(address attendee) public {
    require(state == State.OnRefunding);
    deposited =  deposited - fee;
    attendee.transfer(fee);
    emit Refunded(attendee, fee);
  }
  
  function getAtttendees() constant returns (address[]) {
      return attendees;
  }
}