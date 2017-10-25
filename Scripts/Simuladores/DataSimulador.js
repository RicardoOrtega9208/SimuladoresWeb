
function InverSFn(CantCoutas, ValorCoutaMes, PorcentajeDTF, ControlTabla) {
    $.ajax({
        type: "GET",
        url: urlConnect + "InverS",
        dataType: 'json',
        data: {
            pCantCoutas: CantCoutas,
            pValorCoutaMes: ValorCoutaMes,
            pPorcentajeDTF: PorcentajeDTF
        },
        cache: false,
        success: function (data) {
            construirTableHTML(ControlTabla, data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            contruirErrorMessage(ControlTabla);
        }
    });
}

function Ahorrito(CantCoutas, ValorCoutaMes, ControlTabla) {

    $.ajax({
        type: "GET",
        url: urlConnect + "Ahorrito",
        dataType: "json",
        data: {
            pCantCoutas: CantCoutas,
            pValorCoutaMes: ValorCoutaMes
        },
        cache: false,
        success: function (data) {
            construirTableHTML(ControlTabla, data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            contruirErrorMessage(ControlTabla);
        }
    });
}

function Credito(MesesCredito, MontoCredito, FormaPago, ControlTabla) {
    $.ajax({
        type: "GET",
        url: urlConnect + "Credito",
        dataType: 'json',
        data: {
            pMesesCredito: MesesCredito,
            pMontoCredito: MontoCredito,
            pFormaPago: FormaPago
        },
        cache: false,
        success: function (data) {
            construirTableHTML(ControlTabla, data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            contruirErrorMessage(ControlTabla);
        }
    });
}

function CDT(TipoPersona, MontoCDT, CantDias, PeriodoLiquidacion, ControlTabla) {
    $.ajax({
        type: "GET",
        url: urlConnect + "CDT",
        dataType: 'json',
        data: {
            pTipoPersona: TipoPersona,
            pMontoCDT: MontoCDT,
            pCantDias: CantDias,
            pPeriodoLiquidacion: PeriodoLiquidacion
        },
        cache: false,
        success: function (data) {
            construirTableHTML(ControlTabla, data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            contruirErrorMessage(ControlTabla);
        }
    });
}