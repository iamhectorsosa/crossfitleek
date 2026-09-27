import * as React from "react";

type ValuePropCardProps = {
  title: string;
  description: string;
};

export const ValuePropCard: React.FC<ValuePropCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="space-y-2 rounded-sm border border-border bg-card p-6">
      <h3 className="heading-styles text-base text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
