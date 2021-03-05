import { Input } from "antd";
import React, { useState } from "react";

interface ISuggestion {
  id?: string;
  label: string;
}

interface IProps {
  suggestions: ISuggestion[];
  value?: any;
  onChange?: any;
}

const AutoComplete: React.FC<IProps> = ({ suggestions, value, onChange }) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<ISuggestion[]>(
    []
  );
  const [showSuggestions, setShowSuggestions] = useState(false);

  const triggerChange = (changedValue: any) => {
    onChange?.({
      ...value,
      ...changedValue,
    });
  };

  const onChange2 = (input: any) => {
    const inputValue: string = input.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.label
          .toLocaleLowerCase()
          .indexOf(inputValue.toLocaleLowerCase()) > -1
    );

    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    triggerChange({
      suggestion: {
        label: inputValue,
      },
    });
  };

  const onClick = (suggestion: ISuggestion) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);

    triggerChange({
      suggestion,
    });
  };

  const RenderSuggestions = () => {
    if (showSuggestions) {
      if (value?.label !== "") {
        if (filteredSuggestions.length) {
          return (
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;

                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }

                return (
                  <li
                    className={className}
                    key={index}
                    onClick={() => onClick(suggestion)}
                  >
                    {suggestion.label}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          return (
            <div className="no-suggestions">
              <em>Sem sugestões.</em>
            </div>
          );
        }
      } else {
        return (
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={index}
                  onClick={() => onClick(suggestion)}
                >
                  {suggestion.label}
                </li>
              );
            })}
          </ul>
        );
      }
    } else {
      return <div></div>;
    }
  };

  return (
    <>
      <Input
        type="text"
        value={value?.suggestion?.label}
        onChange={onChange2}
        onClick={onChange2}
        allowClear
        onBlur={() =>
          setTimeout(() => {
            setShowSuggestions(false);
          }, 100)
        }
        placeholder="Cidade"
      />
      <RenderSuggestions />
    </>
  );
};

export default AutoComplete;
