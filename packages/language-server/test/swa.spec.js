const { expect } = require("chai");
const { SWATracker } = require("@sap/swa-for-sapbas-vsx");
const { getSWA, setGlobalSWA } = require("../lib/swa");

describe("The SWA 'Global' Wrapper", () => {
  let orgSwaImpl;
  beforeEach(() => {
    orgSwaImpl = getSWA();
  });

  afterEach(() => {
    setGlobalSWA(orgSwaImpl);
  });

  it("will expose a frozen SWA impl by default", async () => {
    const swaImpl = getSWA();
    swaImpl.bamba = 666;
    expect(swaImpl).to.not.have.property("bamba");
  });

  it("will expose a NO-OPERATION (safe to execute) SWA impl by default", async () => {
    const swaImpl = getSWA();
    expect(() => {
      swaImpl.track("hello world", [1, 2, 3]);
    }).to.not.throw();
  });

  it("will enable setting a new global SWA Implementation", async () => {
    const orgSwaImpl = getSWA();
    const newSwaImpl = new SWATracker("osem", "bamba");
    setGlobalSWA(newSwaImpl);
    expect(getSWA()).to.equal(newSwaImpl);
    expect(getSWA()).to.not.equal(orgSwaImpl);
  });
});
