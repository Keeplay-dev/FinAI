import React from 'react';
import { Sparkles, PlusCircle, Trash2, Printer, Bot } from 'lucide-react';

interface HeaderProps {
  onOpenManualModal: () => void;
  onOpenGeminiModal: () => void;
  onOpenPDFModal: () => void;
  onClearData: () => void;
  hasData: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenManualModal,
  onOpenGeminiModal,
  onOpenPDFModal,
  onClearData,
  hasData
}) => {
  return (
    <header className="no-print" style={{
      borderBottom: '1px solid var(--border-pastel-blue)',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 10px rgba(59, 130, 246, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      padding: '14px 20px'
    }}>
      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 14
      }}>
        {/* Logo & Título Solicitado */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
          }}>
            <Sparkles size={22} color="#FFFFFF" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A' }}>
              Fin<span style={{ color: '#2563EB' }}>AI</span>
            </h1>
            <p style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>
              Gestão Financeira & Análise Inteligente
            </p>
          </div>
        </div>

        {/* Botões de Ação */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          {/* Botão para Gerar PDF do Mês */}
          <button
            onClick={onOpenPDFModal}
            className="btn btn-primary btn-sm"
            title="Gerar e salvar relatório em PDF com os dados do mês"
          >
            <Printer size={16} />
            <span>Gerar PDF do Mês</span>
          </button>

          {/* Botão para IA Generativa Gemini */}
          <button
            onClick={onOpenGeminiModal}
            className="btn btn-secondary btn-sm"
            title="Acionar a IA Generativa Google Gemini para diagnóstico e perguntas"
          >
            <Bot size={16} color="#2563EB" />
            <span>IA Generativa Gemini</span>
          </button>

          {/* Botão Novo Lançamento */}
          <button
            onClick={onOpenManualModal}
            className="btn btn-secondary btn-sm"
            title="Lançar gasto ou receita manualmente"
          >
            <PlusCircle size={16} color="#059669" />
            <span>Novo Lançamento</span>
          </button>

          {/* Botão Limpar */}
          {hasData && (
            <button
              onClick={onClearData}
              className="btn btn-secondary btn-sm"
              style={{ color: '#DC2626', borderColor: '#FECACA', backgroundColor: '#FEF2F2' }}
              title="Limpar todos os dados carregados"
            >
              <Trash2 size={16} />
              <span>Limpar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
