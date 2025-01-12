//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 4.0.0
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class GQ7ContinuousBIT_System_Process : ContinuousBIT_System_Process {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;

  internal GQ7ContinuousBIT_System_Process(global::System.IntPtr cPtr, bool cMemoryOwn) : base(msclPINVOKE.GQ7ContinuousBIT_System_Process_SWIGUpcast(cPtr), cMemoryOwn) {
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(GQ7ContinuousBIT_System_Process obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  protected override void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_GQ7ContinuousBIT_System_Process(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      base.Dispose(disposing);
    }
  }

  public GQ7ContinuousBIT_System_Process() : this(msclPINVOKE.new_GQ7ContinuousBIT_System_Process__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public GQ7ContinuousBIT_System_Process(ushort bits) : this(msclPINVOKE.new_GQ7ContinuousBIT_System_Process__SWIG_1(bits), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public byte imuIpcFault() {
    byte ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_imuIpcFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool imuControlLineFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_imuControlLineFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool imuCommandResponseFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_imuCommandResponseFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool imuSpiTransferFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_imuSpiTransferFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool imuDataFrameFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_imuDataFrameFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public byte filterIpcFault() {
    byte ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_filterIpcFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool filterControlLineFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_filterControlLineFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool filterCommandResponseFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_filterCommandResponseFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool filterSpiTransferFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_filterSpiTransferFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool filterDataFrameFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_filterDataFrameFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public byte gnssIpcFault() {
    byte ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_gnssIpcFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool gnssControlLineFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_gnssControlLineFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool gnssCommandResponseFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_gnssCommandResponseFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool gnssSpiTransferFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_gnssSpiTransferFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool gnssDataFrameFault() {
    bool ret = msclPINVOKE.GQ7ContinuousBIT_System_Process_gnssDataFrameFault(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static readonly ushort IMU_CONTROL_LINE_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_IMU_CONTROL_LINE_FAULT_get();
  public static readonly ushort IMU_COMMAND_RESPONSE_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_IMU_COMMAND_RESPONSE_FAULT_get();
  public static readonly ushort IMU_SPI_TRANSFER_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_IMU_SPI_TRANSFER_FAULT_get();
  public static readonly ushort IMU_DATA_FRAME_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_IMU_DATA_FRAME_FAULT_get();
  public static readonly ushort FILTER_CONTROL_LINE_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_FILTER_CONTROL_LINE_FAULT_get();
  public static readonly ushort FILTER_COMMAND_RESPONSE_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_FILTER_COMMAND_RESPONSE_FAULT_get();
  public static readonly ushort FILTER_SPI_TRANSFER_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_FILTER_SPI_TRANSFER_FAULT_get();
  public static readonly ushort FILTER_DATA_FRAME_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_FILTER_DATA_FRAME_FAULT_get();
  public static readonly ushort GNSS_CONTROL_LINE_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_GNSS_CONTROL_LINE_FAULT_get();
  public static readonly ushort GNSS_COMMAND_RESPONSE_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_GNSS_COMMAND_RESPONSE_FAULT_get();
  public static readonly ushort GNSS_SPI_TRANSFER_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_GNSS_SPI_TRANSFER_FAULT_get();
  public static readonly ushort GNSS_DATA_FRAME_FAULT = msclPINVOKE.GQ7ContinuousBIT_System_Process_GNSS_DATA_FRAME_FAULT_get();
}

}
